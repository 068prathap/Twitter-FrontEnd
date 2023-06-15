import './SideNavbar.css';
import TwitterLogo from '../../icons/twitterLogo.svg'
import homeIcon from '../../icons/homeIcon.svg';
import hashIcon from '../../icons/hashIcon.svg';
import blackBell from '../../icons/blackBell.svg';
import mailIcon from '../../icons/mailIcon.svg';
import bookIcon from '../../icons/bookIcon.svg';
import blueTweet from '../../icons/blueTweet.svg';
import profileIcon from '../../icons/profileIcon.svg';
import menuIcon from '../../icons/menuIcon.svg';
import threeDots from '../../icons/threeDots.svg';
import magnifyingGlass from '../../icons/magnifyingGlass.svg';
import { useRef, useState } from 'react';
import SideNavbarTab from '../sideNavbarTabs/SideNavbarTab';
import homeIconActive from '../../icons/homeIconActive.svg';
import hashIconActive from '../../icons/hashIconActive.svg';
import blackBellActive from '../../icons/blackBellActive.svg';
import mailIconActive from '../../icons/mailIconActive.svg';
import bookIconActive from '../../icons/bookIconActive.svg';
import blueTweetActive from '../../icons/blueTweetActive.svg';
import profileIconActive from '../../icons/profileIconActive.svg';
import tweetIcon from '../../icons/tweetIcon.svg';
import magnifyingGlassActive from '../../icons/magnifyingGlassActive.svg';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';

export default observer(function SideNavbar()
{
    const sideNavbarHomeTabP=useRef();
    const sideNavbarExploreTabP=useRef();
    const sideNavbarNotifyTabP=useRef();
    const sideNavbarMsgTabP=useRef();
    const sideNavbarBMTabP=useRef();
    const sideNavbarTBTabP=useRef();
    const sideNavbarProfileTabP=useRef();
    const sideNavbarMoreTabP=useRef();
    const sideNavbarHomeTabImg=useRef();
    const sideNavbarExploreTabImg=useRef();
    const sideNavbarNotifyTabImg=useRef();
    const sideNavbarMsgTabImg=useRef();
    const sideNavbarBMTabImg=useRef();
    const sideNavbarTBTabImg=useRef();
    const sideNavbarProfileTabImg=useRef();
    const [active,setActive]=useState(sideNavbarHomeTabP);
    const [activeImg,setActiveImg]=useState(sideNavbarHomeTabImg);
    const [oldImg,setOldImg]=useState(homeIcon);
    const sideNavbarSearchTabImg=useRef();
    const sideNavbarSearchTabP=useRef();

    return(
        <div className='sideNavbarDiv'>
            <div className='sideNavbar'>
                <div className='sideNavbarContent'>
                    <div className='sideNavbarTwitterLogoDiv'>
                        <img className='sideNavbarTwitterLogo' src={TwitterLogo}/>
                    </div>
                    <div className='sideNavbarTabs'>
                        <SideNavbarTab class={'sideNavbarHomeTab sideNavbarTab'} imgClass={'sideNavbarHomeTabImg sideNavbarTabImg'} imgRef={sideNavbarHomeTabImg} img={homeIcon} imgActive={homeIconActive} pClass={'sideNavbarHomeTabP sideNavbarTabP'} pRef={sideNavbarHomeTabP} pText={'Home'} active={active} setActive={setActive} activeImg={activeImg} setActiveImg={setActiveImg} oldImg={oldImg} setOldImg={setOldImg} navigate={'/home'} exploreTab={true}/>
                        <SideNavbarTab class={'sideNavbarExploreTab sideNavbarTab'} imgClass={'sideNavbarExploreTabImg sideNavbarTabImg'} imgRef={sideNavbarExploreTabImg} img={hashIcon} imgActive={hashIconActive} pClass={'sideNavbarExploreTabP sideNavbarTabP'} pRef={sideNavbarExploreTabP} pText={'Explore'} active={active} setActive={setActive} activeImg={activeImg} setActiveImg={setActiveImg} oldImg={oldImg} setOldImg={setOldImg} navigate={'/explore/for-you'} exploreTab={false}/>
                        <SideNavbarTab class={'sideNavbarSearchTab sideNavbarTab'} imgClass={'sideNavbarSearchTabImg sideNavbarTabImg'} imgRef={sideNavbarSearchTabImg} img={magnifyingGlass} imgActive={magnifyingGlassActive} pClass={'sideNavbarSearchTabP sideNavbarTabP'} pRef={sideNavbarSearchTabP} pText={'Explore'} active={active} setActive={setActive} activeImg={activeImg} setActiveImg={setActiveImg} oldImg={oldImg} setOldImg={setOldImg} navigate={'/explore/for-you'} exploreTab={true}/>
                        <SideNavbarTab class={'sideNavbarNotifyTab sideNavbarTab'} imgClass={'sideNavbarNotifyTabImg sideNavbarTabImg'} imgRef={sideNavbarNotifyTabImg} img={blackBell} imgActive={blackBellActive} pClass={'sideNavbarNotifyTabP sideNavbarTabP'} pRef={sideNavbarNotifyTabP} pText={'Notifications'} active={active} setActive={setActive} activeImg={activeImg} setActiveImg={setActiveImg} oldImg={oldImg} setOldImg={setOldImg} navigate={'/notification'} exploreTab={true}/>
                        <SideNavbarTab class={'sideNavbarMsgTab sideNavbarTab'} imgClass={'sideNavbarMsgTabImg sideNavbarTabImg'} imgRef={sideNavbarMsgTabImg} img={mailIcon} imgActive={mailIconActive} pClass={'sideNavbarMsgTabP sideNavbarTabP'} pRef={sideNavbarMsgTabP} pText={'Messages'} active={active} setActive={setActive} activeImg={activeImg} setActiveImg={setActiveImg} oldImg={oldImg} setOldImg={setOldImg} exploreTab={true} navigate={'/messages'} newLayout={true}/>
                        <SideNavbarTab class={'sideNavbarBMTab sideNavbarTab'} imgClass={'sideNavbarBMTabImg sideNavbarTabImg'} imgRef={sideNavbarBMTabImg} img={bookIcon} imgActive={bookIconActive} pClass={'sideNavbarBMTabP sideNavbarTabP'} pRef={sideNavbarBMTabP} pText={'Bookmarks'} active={active} setActive={setActive} activeImg={activeImg} setActiveImg={setActiveImg} oldImg={oldImg} setOldImg={setOldImg} exploreTab={true}/>
                        <SideNavbarTab class={'sideNavbarTBTab sideNavbarTab'} imgClass={'sideNavbarTBTabImg sideNavbarTabImg'} imgRef={sideNavbarTBTabImg} img={blueTweet} imgActive={blueTweetActive} pClass={'sideNavbarTBTabP sideNavbarTabP'} pRef={sideNavbarTBTabP} pText={'Twitter Blue'} active={active} setActive={setActive} activeImg={activeImg} setActiveImg={setActiveImg} oldImg={oldImg} setOldImg={setOldImg} exploreTab={true} twitterBlue={true}/>
                        <SideNavbarTab class={'sideNavbarProfileTab sideNavbarTab'} imgClass={'sideNavbarProfileTabImg sideNavbarTabImg'} imgRef={sideNavbarProfileTabImg} img={profileIcon} imgActive={profileIconActive} pClass={'sideNavbarProfileTabP sideNavbarTabP'} pRef={sideNavbarProfileTabP} pText={'Profile'} active={active} setActive={setActive} activeImg={activeImg} setActiveImg={setActiveImg} oldImg={oldImg} setOldImg={setOldImg} navigate={`/${store.username}`} profilePage={true} exploreTab={true}/>
                        <SideNavbarTab class={'sideNavbarMoreTab sideNavbarTab'} imgClass={'sideNavbarMoreTabImg sideNavbarTabImg'} img={menuIcon} pClass={'sideNavbarMoreTabP sideNavbarTabP'} pRef={sideNavbarMoreTabP} pText={'More'} active={active} setActive={setActive} exploreTab={true}/>
                    </div>
                    <div className='tweetButtonOuter'>
                        <div className='tweetButton'>
                            <p className='tweetButtonText'>Tweet</p>
                            <img className='tweetButtonIcon' src={tweetIcon}/>
                        </div>
                    </div>
                </div>
                <div className='userAccount'>
                    <div className='userProfileImgDiv'>
                        <img className='userProfileImg' src={store.profileImage}/>
                    </div>
                    <div className='userData'>
                        <p className='userAccountName'>{store.name}</p>
                        <p className='userNickName'>@{store.username}</p>
                    </div>
                    <div className='threeDots'>
                        <img className='threeDotsImg' src={threeDots}/>
                    </div>
                </div>
            </div>
        </div>
    )
})