import './MessagesInbox.css'
import { settingIcon } from '../../utils/icongenerator'
import { addMessageIcon } from '../../utils/icongenerator'
import { observer } from 'mobx-react'
import { store } from '../../Mobx'
import { searchIcon } from '../../utils/icongenerator'
import { useRef, useState } from 'react'
import { leftDirectionArrow } from '../../utils/icongenerator'
import { closeIconWithBackground } from '../../utils/icongenerator'
import useOnClickOutside from '../../utils/customHooks/useOnClickOutside'
import InboxMessageList from '../inboxMessageList/InboxMessageList'
import MessageInboxNavbar from '../messageInoxNavbar/MessageInoxNavbar'

export default observer(function MessagesInbox()
{
    const [searchValue, setSearchValue] = useState('')
    const [inputFocus,setInputFocus]=useState(false)
    const searchMessageInputBox=useRef()
    const searchMessageInputOuter=useRef()
    const [searchActive,setSearchActive]=useState(false)

    useOnClickOutside(searchMessageInputOuter, () => setInputFocus(false))
    

    return (
        <div className='messagesInboxOuter'>
            <div className='messagesInbox'>
                <div className='messageInboxHeadingOuter'>
                    <div className='messageInboxHeading'>
                        <div className='messageHeadingDiv'>
                            <p className='messageHeading'>Messages</p>
                        </div>
                        <div className='messageSettingDiv'>
                            <div className='messageSetting'>{settingIcon('rgb(15, 20, 25)', '19px', '19px')}</div>
                        </div>
                        <div className='messageAddMembersDiv'>
                            <div className='messageAddMembers'>{addMessageIcon('rgb(15, 20, 25)', '19px', '19px')}</div>
                        </div>
                    </div>
                </div>
                {false ?
                    <div className='emptyInboxNoteOuter'>
                        <div className='emptyInboxNote'>
                            <div className='messageInboxWelcome'>
                                <p className='messageInboxWelcomeText'>Welcome to your inbox!</p>
                            </div>
                            <div className='inboxNoteDiv'>
                                <p className='inboxNote'>Drop a line, share Tweets and more with private conversations between you and others on Twitter. </p>
                            </div>
                            <div className='addInboxButtonOuter' onClick={() => { store.dialogBoxs.messageAddDialogBox = true; }}>
                                <div className='addInboxButton'>
                                    <p className='addInboxButtonText'>Write a message</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='inboxListOuter'>
                        <div className='inboxList'>
                            <div className='searchMessageOuter'>
                                <div className={searchActive==true ? 'searchMessage searchMessage-1' : 'searchMessage'}>
                                    <div className={searchActive==true ? 'backFromMessageSearchOuter backFromMessageSearchOuter-1' : 'backFromMessageSearchOuter'} onClick={()=>{setSearchActive(false);searchMessageInputBox.current.value='';setSearchValue('')}}>
                                        <div className='backFromMessageSearch'>
                                            <div className='backFromMessageSearchIcon'>{leftDirectionArrow('rgb(15, 20, 25)','19px','19px')}</div>
                                        </div>
                                    </div>
                                    <div ref={searchMessageInputOuter} className='searchMessageInputOuter'>
                                        <div className={inputFocus==true ? 'searchMessageInput searchMessageInput-1' : 'searchMessageInput'}>
                                            <div className={inputFocus==true ? 'searchMessageInputBoxOuter searchMessageInputBoxOuter-1' : 'searchMessageInputBoxOuter'}>
                                                <div className='searchMessageInputBoxDiv'>
                                                    <input ref={searchMessageInputBox} className='searchMessageInputBox' placeholder='Search Direct Messages' type="text"  onFocus={()=>{setInputFocus(true);setSearchActive(true)}} onChange={(e)=>{setSearchValue(e.target.value)}}/>
                                                </div>
                                            </div>
                                            <div className={inputFocus==true ? 'messageInputSearchIconDiv messageInputSearchIconDiv-1' : 'messageInputSearchIconDiv'}>
                                                <div className='messageInputSearchIcon'>{searchIcon('rgb(83, 100, 113)', '15px', '15px')}</div>
                                            </div>
                                            <div className={inputFocus==true ? 'messageSearchTextDiv messageSearchTextDiv-1' : 'messageSearchTextDiv'}>
                                                <p className='messageSearchText'>{searchValue == '' ? 'Search Direct Messages' : searchValue}</p>
                                            </div>
                                            <div className={inputFocus==true && searchValue.length!=0 ? 'closeSearchedMessageDiv closeSearchedMessageDiv-1' : 'closeSearchedMessageDiv'} onClick={()=>{searchMessageInputBox.current.value='';setSearchValue('')}}>
                                                <div className='closeSearchedMessage'>{closeIconWithBackground('color: rgb(15, 20, 25)','21px','21px')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {searchActive==false ?
                                <div className='InboxMessageListTagOuter'>
                                    <div className='InboxMessageListTag'>
                                        <InboxMessageList/>
                                    </div>
                                </div>
                                :
                                searchValue.length==0 ?
                                    <div className='emptySearchMessageDiv'>
                                        <p className='emptySearchMessageNote'>Try searching for people, groups, or messages</p>
                                    </div>
                                    :
                                    <div className='MessageInboxNavbarTagOuter'>
                                        <div className='MessageInboxNavbarTag'>
                                            <MessageInboxNavbar/>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
})