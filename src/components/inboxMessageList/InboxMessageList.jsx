import { useRef, useState } from 'react'
import './InboxMessageList.css'
import { threeDot } from '../../utils/icongenerator'
import { pinIcon } from '../../utils/icongenerator'
import { cancelBell } from '../../utils/icongenerator'
import { flagIcon } from '../../utils/icongenerator'
import { dustbin } from '../../utils/icongenerator'
import useOnClickOutside from '../../utils/customHooks/useOnClickOutside'

export default function InboxMessageList()
{
    const [messageActive,setMessageActive]=useState(true)
    const [messageMenuColor,setMessageMenuColor]=useState('rgb(83, 100, 113)')
    const [messageHover,setMessageHover]=useState(false)
    const [messageMenu,setMessageMenu]=useState(false)
    const messageMenuListOuter=useRef();

    useOnClickOutside(messageMenuListOuter, () => setMessageMenu(false))

    return(
        <div className='InboxMessageListOuter' onMouseOver={()=>{setMessageHover(true)}} onMouseOut={()=>{setMessageHover(false)}}>
            <div className={messageActive==true ? 'InboxMessageList InboxMessageList-1' : 'InboxMessageList'}>
                <div className='InboxMessageDetailsOuter'>
                    <div className='InboxMessageDetails'>
                        <div className='InboxMessageImgOuter'>
                            <div className='InboxMessageImgDiv'>
                                <img className='InboxMessageImg' src="https://pbs.twimg.com/profile_images/824847228804046849/otlZxedm_normal.jpg"/>
                            </div>
                        </div>
                        <div className='InboxMessageNameDiv'>
                            <p className='InboxMessageName'>Channel V India</p>
                        </div>
                        <div className='InboxMessageUsernameDiv'>
                            <p className='InboxMessageUsername'>@ChannelvIndia</p>
                        </div>
                        <div className='InboxMessageDotOuter'>
                            <p className='InboxMessageDot'>·</p>
                        </div>
                    </div>
                </div>
                <div className={messageHover==true ? 'messageMenuOuter messageMenuOuter-1' : 'messageMenuOuter'} onMouseOver={()=>{setMessageMenuColor('rgb(29, 155, 240)')}} onMouseOut={()=>{setMessageMenuColor('rgb(83, 100, 113)')}} onClick={()=>{setMessageMenu(true)}}>
                    <div className='messageMenu'>
                        <div className='messageMenuIcon'>{threeDot(`${messageMenuColor}`,'17.5px','17.5px')}</div>
                    </div>
                </div>
                {messageMenu==true ?
                    <div ref={messageMenuListOuter} className='messageMenuListOuter'>
                        <div className='messageMenuList'>
                            <div className='messageMenuOptionOuter'>
                                <div className='messageMenuOption'>
                                    <div className='messageMenuOptionIconDiv'>
                                        <div className='messageMenuOptionIcon'>{pinIcon('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                                    </div>
                                    <div className='messageMenuOptionTextDiv'>
                                        <p className='messageMenuOptionText'>Pin conversation</p>
                                    </div>
                                </div>
                            </div>
                            <div className='messageMenuOptionOuter'>
                                <div className='messageMenuOption'>
                                    <div className='messageMenuOptionIconDiv'>
                                        <div className='messageMenuOptionIcon'>{cancelBell('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                                    </div>
                                    <div className='messageMenuOptionTextDiv'>
                                        <p className='messageMenuOptionText'>Snooze conversation</p>
                                    </div>
                                </div>
                            </div>
                            <div className='messageMenuOptionOuter'>
                                <div className='messageMenuOption'>
                                    <div className='messageMenuOptionIconDiv'>
                                        <div className='messageMenuOptionIcon'>{flagIcon('rgb(15, 20, 25)','17.5px','17.5px')}</div>
                                    </div>
                                    <div className='messageMenuOptionTextDiv'>
                                        <p className='messageMenuOptionText'>Report conversation</p>
                                    </div>
                                </div>
                            </div>
                            <div className='messageMenuOptionOuter'>
                                <div className='messageMenuOption'>
                                    <div className='messageMenuOptionIconDiv'>
                                        <div className='messageMenuOptionIcon'>{dustbin('rgb(244, 33, 46)','17.5px','17.5px')}</div>
                                    </div>
                                    <div className='messageMenuOptionTextDiv'>
                                        <p className='messageMenuOptionText messageMenuOptionText-1'>Delete conversation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
                <div className='InboxMessageActiveLineOuter'>
                    <div className='InboxMessageActiveLineDiv'>
                        <div className='InboxMessageActiveLine'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}