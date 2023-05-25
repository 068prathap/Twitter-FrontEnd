import './ContentArea.css'
import TweetBox from '../tweetBox/TweetBox'
import blueTick from '../../icons/blueTick.svg';
import whiteWorldIcon from '../../icons/whiteWorldIcon.svg';
import replyFollowAvatar from '../../icons/replyFollowAvatar.svg';
import whiteAtIcon from '../../icons/whiteAtIcon.svg'; 
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import { useRef, useState } from 'react';
import blueFollowAvatar from '../../icons/blueFollowAvatar.svg'
import atIconActive from '../../icons/atIconActive.svg';
import worldLogo from '../../icons/worldLogo.svg';
import TweetBoxSelection from '../tweetBoxSelection/TweetBoxSelection';
import useOnClickOutside from '../../utils/customHooks/useOnClickOutside';

export default observer( function ContentArea()
{
    const [currentReplyOption,setCurrentReplyOption]=useState(1)
    const tweetReplyDialogBoxOuter=useRef()
    useOnClickOutside(tweetReplyDialogBoxOuter, ()=>store.tweetReplyOptionsDialogBox=false)

    return(
        <div className='contentArea'>
            <div className='tweetBoxDiv'>
                <TweetBox/>
            </div>
            <div>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
                <p>content area</p>
            </div>
            <div ref={tweetReplyDialogBoxOuter} className={store.tweetReplyOptionsDialogBox==true ? 'tweetReplyDialogBoxOuter tweetReplyDialogBoxOuter-1' : 'tweetReplyDialogBoxOuter'}>
                <div className='tweetReplyDialogBox'>
                    <div className='replyDialogBoxHeading'>
                        <p className='replyDialogBoxHeadingText'>Who can reply?</p>
                    </div>
                    <div className='replySelectionNote'>
                        <p className='replySelectionNoteText'>Choose who can reply to this Tweet. Anyone mentioned can always reply.</p>
                    </div>
                    <div className='replyEveryoneOptionOuter' onClick={()=>{setCurrentReplyOption(1);store.tweetReplyOptionsDialogBox=false;store.tweetReplyOptionText='Everyone can reply';store.tweetReplyOptionLogo=worldLogo}}>
                        <TweetBoxSelection selectionTopicLogo={whiteWorldIcon} selectionTopicText={'Everyone'} selectionTickIcon={blueTick} activeStatus={currentReplyOption!=1 ? false : true}/>
                    </div>
                    <div className='replyFollowOptionOuter' onClick={()=>{setCurrentReplyOption(2);store.tweetReplyOptionsDialogBox=false;store.tweetReplyOptionText='People you follow can reply';store.tweetReplyOptionLogo=blueFollowAvatar}}>
                        <TweetBoxSelection selectionTopicLogo={replyFollowAvatar} selectionTopicText={'People you follow'} selectionTickIcon={blueTick} activeStatus={currentReplyOption!=2 ? false : true}/>
                    </div>
                    <div className='replyMentionOptionOuter' onClick={()=>{setCurrentReplyOption(3);store.tweetReplyOptionsDialogBox=false;store.tweetReplyOptionText='Only people you mention can reply';store.tweetReplyOptionLogo=atIconActive}}>
                        <TweetBoxSelection selectionTopicLogo={whiteAtIcon} selectionTopicText={'Only people you mention'} selectionTickIcon={blueTick} activeStatus={currentReplyOption!=3 ? false : true}/>
                    </div>
                </div>
            </div>
        </div>
    )
})