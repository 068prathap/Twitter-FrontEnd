import './TweetBox.css';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import ReplyOption from '../replyOption/ReplyOption';
import SendingOption from '../sendingOption/SendingOption';
import TweetTextArea from '../tweetTextArea/TweetTextArea';
import TweetingFeatures from '../tweetingFeatures/TweetingFeatures';
import ProgressBar from '../progressBar/ProgressBar';
import AddTweet from '../addTweet/AddTweet';
import BoxTweetButton from '../boxTweetButton/BoxTweetButton'; 
import { TweetingAreaChange } from '../../utils/TweetBox';
import { useEffect, useRef, useState } from 'react';
import whiteWorldIcon from '../../icons/whiteWorldIcon.svg';
import blueTick from '../../icons/blueTick.svg';
import lockIcon from '../../icons/lockIcon.svg';
import TweetBoxSelection from '../tweetBoxSelection/TweetBoxSelection';
import SendingCircleOption from '../sendingCircleOption/SendingCircleOption';
import useOnClickOutside from '../../utils/customHooks/useOnClickOutside';

export default observer(function TweetBox()
{
    const tweetingAreaSendingOptionOuter=useRef()
    const tweetingAreaReplyOptionOuter=useRef()
    const tweetSendingListBoxOuter=useRef()
    const [sendEveryone,setSendEveryone]=useState(true);
    useOnClickOutside(tweetSendingListBoxOuter, ()=>{store.tweetSendingListDialogBox=false})

    return (
        <div className='tweetBox'>
            <div className='tweetBoxProfileImageDiv'>
                <img className='tweetBoxProfileImage' src={store.profileImage} />
            </div>
            <div className='tweetBoxTweetingAreaOuter'>
                <div className='tweetBoxTweetingArea'>
                    <div ref={tweetingAreaSendingOptionOuter} className='tweetingAreaSendingOptionOuter' onClick={()=>{store.tweetSendingListDialogBox=true}}>
                        <SendingOption sendEveryone={sendEveryone} currentSendingOption={sendEveryone==true ? 'Everyone' : 'Twitter Circle'}/>
                    </div>
                    <div className='tweetingAreaInputBoxDiv tweetingAreaInputBoxDiv-1' onClick={()=>TweetingAreaChange(tweetingAreaSendingOptionOuter,tweetingAreaReplyOptionOuter)}>
                        <TweetTextArea />
                    </div>
                    <div ref={tweetingAreaReplyOptionOuter} className={sendEveryone==true ? 'tweetingAreaReplyOptionOuter' : 'tweetingAreaReplyOptionOuter tweetingAreaReplyOptionOuter-1'} onClick={()=>store.tweetReplyOptionsDialogBox=true}>
                        <ReplyOption tweetReplyOptionText={sendEveryone==true ? store.tweetReplyOptionText : 'Only your Twitter Circle can reply'} tweetReplyOptionLogo={sendEveryone==true ? store.tweetReplyOptionLogo : lockIcon} />
                    </div>
                    <div className='tweetingAreaBottomOuter'>
                        <div className='tweetingAreaBottom'>
                            <div className='tweetingFeatures'>
                                <TweetingFeatures/>
                            </div>
                            <div className='tweetingAreaBottomRightOuter'>
                                <div className='tweetingAreaBottomRight'>
                                    <div className={store.tweet.length=='' ? 'tweetingDetails' : 'tweetingDetails-1'}>
                                        <div className={store.tweet.length<260 ? "tweetTextCircularProgressDiv" : "tweetTextCircularProgressDiv tweetTextCircularProgressDiv-1"}>
                                            <ProgressBar/>
                                        </div>
                                        <div className='tweetingDetailsLine'></div>
                                        <div className='addTweetIconDivOuter'>
                                            <AddTweet/>
                                        </div>
                                    </div>
                                    <div className='tweetBoxTweetButtonOuter'>
                                        <BoxTweetButton/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={tweetSendingListBoxOuter} className={store.tweetSendingListDialogBox==false ? 'tweetSendingListBoxOuter' : 'tweetSendingListBoxOuter tweetSendingListBoxOuter-1'}>
                <div className='tweetSendingListBox'>
                    <div className='sendingListHeading'>
                        <p className='sendingListHeadingText'>Choose audience</p>
                    </div>
                    <div className='tweetSendingOptions'>
                        <div className='sendingEveryOneOptionOuter' onClick={()=>{setSendEveryone(true); store.tweetSendingListDialogBox=false}}>
                            <TweetBoxSelection selectionTopicLogo={whiteWorldIcon} selectionTopicText={'Everyone'} selectionTickIcon={blueTick} activeStatus={sendEveryone}/>
                        </div>
                        <div className='sendingCircleOptionOuter' onClick={()=>{setSendEveryone(false); store.tweetSendingListDialogBox=false}}>
                            <SendingCircleOption sendEveryone={sendEveryone}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})