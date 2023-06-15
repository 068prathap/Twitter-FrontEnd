import './MessageAddDialogBox.css'
import { closeIcon } from '../../utils/icongenerator'
import { searchIcon } from '../../utils/icongenerator'
import { useRef, useState } from 'react'
import { getUserDetails } from '../../utils/MessageAddDialogBox'
import { observer } from 'mobx-react'
import { store } from '../../Mobx'
import NewMessageList from '../newMessageList/NewMessageList'
import NewMessageAddedList from '../newMessageAddedList/NewMessageAddedList'
import { groupAvadar } from '../../utils/icongenerator'
import { leftDirectionArrow } from '../../utils/icongenerator'

export default observer( function MessageAddDialogBox()
{
    const [searchIconColor,setSearchIconColor]=useState('rgb(15, 20, 25)')
    const [messageList,setMessageList]=useState([]);
    const [messageAddedList,setMessageAddedList]=useState([])
    const messageSearchInput=useRef()
    const [createGroup,setCreatGroup]=useState(false)

    return(
        <div className='messageAddDialogBoxOuter'>
            <div className='messageAddDialogBox'>
                <div className='messageAddBoxTopOuter'>
                    <div className='messageAddBoxTop'>
                        <div className='messageAddBoxHeaderOuter'>
                            <div className='messageAddBoxHeader'>
                                {
                                    createGroup==false ?
                                        <div className='messageAddBoxCloseDiv' onClick={()=>{store.dialogBoxs.messageAddDialogBox=false}}>
                                            <div className='messageAddBoxClose'>{closeIcon('rgb(15, 20, 25)','19px','19px')}</div>
                                        </div>
                                        :
                                        <div className='messageAddBoxCloseDiv' onClick={()=>{setCreatGroup(false)}}>
                                            <div className='messageAddBoxClose'>{leftDirectionArrow('rgb(15, 20, 25)','19px','19px')}</div>
                                        </div>
                                }
                                {
                                    createGroup==false ?
                                        <div className='messageAddBoxHeadingDiv'>
                                            <p className='messageAddBoxHeading'>New message</p>
                                        </div>
                                        :
                                        <div className='createGroupHeadingOuter'>
                                            <div className='createGroupHeadingDiv'>
                                                <p className='createGroupHeading'>Create a group</p>
                                            </div>
                                            <div className='addPeopleTextOuter'>
                                                <p className='addPeopleText'>Add people</p>
                                            </div>
                                        </div>
                                }
                                <div className={messageAddedList.length==0 ? 'messageAddBoxNextButtonOuter' : 'messageAddBoxNextButtonOuter messageAddBoxNextButtonOuter-1'} onClick={()=>{store.dialogBoxs.messageAddDialogBox=false}}>
                                    <div className='messageAddBoxNextButton'>
                                        <p className='messageAddBoxNextButtonText'>Next</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='messageSearchOuter'>
                            <div className='messageSearch'>
                                <div className='messageSearchIconDiv'>
                                    <div className='messageSearchIcon'>{searchIcon(`${searchIconColor}`,'17.5','17')}</div>
                                </div>
                                <div className='messageSearchInputDiv'>
                                    <input ref={messageSearchInput} className='messageSearchInput' type="text" placeholder='Search people' onFocus={()=>{setSearchIconColor('rgb(29,155,240)')}} onBlur={()=>{setSearchIconColor('rgb(15, 20, 25)')}} onChange={(e)=>{getUserDetails(setMessageList,e.target.value)}}/>
                                </div>
                            </div>
                        </div>
                        <div className='messageAddedListOuter'>
                            <div className='messageAddedList'>
                                {
                                    messageAddedList.map((data,index)=>{
                                        return(
                                            <>
                                                <NewMessageAddedList user={data} index={index} setMessageAddedList={setMessageAddedList} messageAddedList={messageAddedList}/>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='messageBoxHorizondalLine'></div>
                    </div>
                </div>
                {
                    messageAddedList.length==0 && createGroup==false ?
                        <div className='createGroupOuter' onClick={()=>{setCreatGroup(true)}}>
                            <div className='createGroup'>
                                <div className='createGroupLogoOuter'>
                                    <div className='createGroupLogoDiv'>
                                        <div className='createGroupLogo'>{groupAvadar('rgb(29, 155, 240)','17px','17px')}</div>
                                    </div>
                                </div>
                                <div className='createGroupTitleDiv'>
                                    <p className='createGroupTitle'>Create a group</p>
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                }
                <div className='messageListOuter'>
                    <div className='messageList'>
                        {
                            messageList.map((data)=>{
                                return(
                                    <NewMessageList user={data._source} setMessageAddedList={setMessageAddedList} messageAddedList={messageAddedList} messageSearchInput={messageSearchInput} setMessageList={setMessageList}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})