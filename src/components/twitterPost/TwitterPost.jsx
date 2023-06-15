import './TwitterPost.css'
import { verified } from '../../utils/icongenerator'
import { threeDot } from '../../utils/icongenerator'
import { command } from '../../utils/icongenerator'
import { retweet } from '../../utils/icongenerator'
import { like } from '../../utils/icongenerator'
import { views } from '../../utils/icongenerator'
import { share } from '../../utils/icongenerator'
import { useRef, useState } from 'react'
import PostDialogBox from '../postDialogBox/PostDialogBox'
import { observer } from 'mobx-react'
import { store } from '../../Mobx'
import useOnClickOutside from '../../utils/customHooks/useOnClickOutside'
import { editPen } from '../../utils/icongenerator'
import { linkIcon } from '../../utils/icongenerator'
import { messageIcon } from '../../utils/icongenerator'
import { addBookmark } from '../../utils/icongenerator'

export default observer(function TwitterPost()
{
    const [threeDotColor, setThreeDotColor] = useState('rgb(83, 100, 113)');
    const [commandColor, setCommandColor] = useState('rgb(83, 100, 113)');
    const [retweetColor, setRetweetColor] = useState('rgb(83, 100, 113)');
    const [likeColor, setLikeClor] = useState('rgb(83, 100, 113)');
    const [viewColor, setViewColor] = useState('rgb(83, 100, 113)');
    const [shareColor, setShareColor] = useState('rgb(83, 100, 113)');
    const [postDialogBox, setPostDialogBox] = useState(false);
    const homePostDialogBox = useRef();
    const [retweetDialogBox, setRetweetDialogBox] = useState(false);
    const retweetDialogBoxRef=useRef();
    const [shareDialogBox,setShareDialogBox]=useState();
    const shareDialogBoxRef=useRef();
    const [likeActive,setLikeActive]=useState(false);

    useOnClickOutside(homePostDialogBox, () => { setPostDialogBox(false); store.bodyCoveringDiv = false })
    useOnClickOutside(retweetDialogBoxRef, () => { setRetweetDialogBox(false); store.bodyCoveringDiv = false })
    useOnClickOutside(shareDialogBoxRef, () => { setShareDialogBox(false); store.bodyCoveringDiv = false })

    return (
        <div className='twitterPostOuter'>
            <div className='twitterPost'>
                <div className='postLogoOuter'>
                    <div className='postLogoDiv'>
                        <img className='postLogo' src="https://pbs.twimg.com/profile_images/1173895565215588352/Pcxpw82k_normal.jpg" />
                    </div>
                </div>
                <div className='postDetailsOuter'>
                    <div className='postDetails'>
                        <div className='postNameDetailsOuter'>
                            <div className='postNameDetails'>
                                <div className='postNameDetailsDiv'>
                                    <div className='postNameOuter'>
                                        <div className='postNameDiv'>
                                            <p className='postName'>prime video IN</p>
                                            <div className='postBlueVerified'>{verified('rgb(29, 155, 240)', '17.5px', '17.5px')}</div>
                                        </div>
                                    </div>
                                    <div className='postUsernameDiv'>
                                        <p className='postUsername'>@PrimeVideoIN</p>
                                    </div>
                                    <div className='postCenterPointDiv'>
                                        <span className='postCenterPoint'>·</span>
                                    </div>
                                    <div className='postTimeDiv'>
                                        <p className='postTime'>4m</p>
                                    </div>
                                </div>
                                <div className='postThreeDotOuter' onClick={() => { setPostDialogBox(true); store.bodyCoveringDiv = true }}>
                                    <div className='postThreeDot' onMouseOver={() => setThreeDotColor('rgb(29, 155, 240)')} onMouseOut={() => { setThreeDotColor('rgb(83, 100, 113)') }}>{threeDot(`${threeDotColor}`, '17.5px', '17.5px')}</div>
                                </div>
                                {postDialogBox == true ?
                                    <div ref={homePostDialogBox} className='homePostDialogBox'>
                                        <PostDialogBox/>
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                        <div className='postContentOuter'>
                            <div className='postContentDiv'>
                                <p className='postContent'>always have fun</p>
                            </div>
                        </div>
                        <div className='postMediaOuter'>
                            <div className='postMediaDiv'>
                                <img className='postMedia' src="https://pbs.twimg.com/media/FxU0djhWAAILvDn?format=jpg&name=small" />
                            </div>
                        </div>
                        <div className='postFooterOuter'>
                            <div className='postFooter'>
                                <div className='postReplyDiv' onMouseOver={() => setCommandColor('rgb(29, 155, 240)')} onMouseOut={() => { setCommandColor('rgb(83, 100, 113)') }}>
                                    <div className='postReply'>{command(`${commandColor}`, '17.5px', '17.5px')}</div>
                                    <p className='postReplyCount'>10</p>
                                </div>
                                <div className='postRetweetDiv' onMouseOver={() => setRetweetColor('rgb(0, 186, 124)')} onMouseOut={() => { setRetweetColor('rgb(83, 100, 113)') }} onClick={()=>{setRetweetDialogBox(true);store.bodyCoveringDiv = true}}>
                                    <div className='postRetweet'>{retweet(`${retweetColor}`, '17.5px', '17.5px')}</div>
                                    <p className='postRetweetCount'>20</p>
                                </div>
                                {retweetDialogBox == true ?
                                    <div ref={retweetDialogBoxRef} className='retweetDialogBox'>
                                        <div className='dialogOptionDiv'>
                                            <div className='dialogEmoji'>{retweet('rgb(15, 20, 25)', '17.5px', '17.5px')}</div>
                                            <p className='dialogOption'>Retweet</p>
                                        </div>
                                        <div className='dialogOptionDiv'>
                                            <div className='dialogEmoji'>{editPen('rgb(15, 20, 25)', '17.5px', '17.5px')}</div>
                                            <p className='dialogOption'>Quote Tweet</p>
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }
                                <div className='postLikeDiv' onMouseOver={() => setLikeClor('rgb(249, 24, 128)')} onMouseOut={() => { setLikeClor('rgb(83, 100, 113)') }}>
                                    {likeActive==false ?
                                        <div className='postLike'>{like(`${likeColor}`, '17.5px', '17.5px')}</div>
                                        :
                                        <div className='postLike'></div>
                                    }
                                    <p className={likeActive==false ? 'postLikeCount' : 'postLikeCount postLikeCount-1'}>30</p>
                                </div>
                                <div className='postViewDiv' onMouseOver={() => setViewColor('rgb(29, 155, 240)')} onMouseOut={() => { setViewColor('rgb(83, 100, 113)') }}>
                                    <div className='postView'>{views(`${viewColor}`, '17.5px', '17.5px')}</div>
                                    <p className='postViewCount'>40</p>
                                </div>
                                <div className='postShareDiv' onMouseOver={() => setShareColor('rgb(29, 155, 240)')} onMouseOut={() => { setShareColor('rgb(83, 100, 113)') }} onClick={() => { setShareDialogBox(true); store.bodyCoveringDiv = true }}>
                                    <div className='postShare'>{share(`${shareColor}`, '17.5px', '17.5px')}</div>
                                </div>
                                {shareDialogBox == true ?
                                    <div ref={shareDialogBoxRef} className='shareDialogBox'>
                                        <div className='dialogOptionDiv'>
                                            <div className='dialogEmoji'>{linkIcon('rgb(15, 20, 25)', '17.5px', '17.5px')}</div>
                                            <p className='dialogOption'>Copy link to Tweet</p>
                                        </div>
                                        <div className='dialogOptionDiv'>
                                            <div className='dialogEmoji'>{messageIcon('rgb(15, 20, 25)', '17.5px', '17.5px')}</div>
                                            <p className='dialogOption'>Send via Direct Message</p>
                                        </div>
                                        <div className='dialogOptionDiv'>
                                            <div className='dialogEmoji'>{addBookmark('rgb(15, 20, 25)', '17.5px', '17.5px')}</div>
                                            <p className='dialogOption'>Bookmark</p>
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})