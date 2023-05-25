import './Home.css';
import SideNavbar from '../../components/sideNavbar/SideNavbar';
import RightSideContent from '../../components/rightSideContent/RightSideContent';
import homeIcon from '../../icons/homeIcon.svg';
import hashIcon from '../../icons/hashIcon.svg';
import blackBell from '../../icons/blackBell.svg';
import mailIcon from '../../icons/mailIcon.svg';
import homeIconActive from '../../icons/homeIconActive.svg';
import hashIconActive from '../../icons/hashIconActive.svg';
import blackBellActive from '../../icons/blackBellActive.svg';
import mailIconActive from '../../icons/mailIconActive.svg';
import { useRef, useState } from 'react';
import { iconClick } from '../../utils/Home';
import tweetIcon from '../../icons/tweetIcon.svg';
import { useEffect } from 'react';
import { profileApicall } from '../../utils/Home';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import Members from '../members/Members';
import {Dialog} from '@material-ui/core';
import { Outlet } from 'react-router-dom';
import TwitterBlue from '../../components/twitterBlue/TwitterBlue';

export default observer(function Home(props)
{
    const bottomHomeIcon=useRef();
    const bottomExploreIcon=useRef();
    const bottomBellIcon=useRef();
    const bottomMailIcon=useRef();
    const [activeIcon,setActiveIcon]=useState(bottomHomeIcon);
    const [oldImg,setOldImg]=useState(homeIcon)

    useEffect(()=>{
        props.twitterCircle==true ? store.currentMembersPage=1 : store.currentMembersPage=2;
    },[])

    return(
        <div className='pageOuter'>
            <div className='home'>
                <div className='sideNavbarTag'>
                    <div className='sideNavbarTagPositionFixed'>
                        <SideNavbar/>
                    </div>
                </div>
                <div className='middleAndRightPage'>
                    <div className='middlepage'>
                        <Outlet/>
                    </div>
                    <div className='rightSideContentTagOuter'>
                        <div className='rightSideContentTag'>
                            <RightSideContent/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='floatingTweetButtonOuter'>
                <div className='floatingTweetButton'>
                    <div className='floatingTweetButtonText'>
                        <img src={tweetIcon}/>
                        <p>Tweet</p>
                    </div>
                </div>
            </div>
            <div className='bottomNavbarOuter'>
                <div className='bottomNavbar'>
                    <div className='bottomHomeIcon bottomIconDiv' onClick={()=>iconClick(bottomHomeIcon,homeIconActive,activeIcon,setActiveIcon,oldImg,setOldImg)}>
                        <img ref={bottomHomeIcon} src={homeIconActive}/>
                    </div>
                    <div className='bottomExploreIcon bottomIconDiv' onClick={()=>iconClick(bottomExploreIcon,hashIconActive,activeIcon,setActiveIcon,oldImg,setOldImg)}>
                        <img ref={bottomExploreIcon} src={hashIcon}/>
                    </div>
                    <div className='bottomBellIcon bottomIconDiv' onClick={()=>iconClick(bottomBellIcon,blackBellActive,activeIcon,setActiveIcon,oldImg,setOldImg)}>
                        <img ref={bottomBellIcon} src={blackBell}/>
                    </div>
                    <div className='bottomMailIcon bottomIconDiv' onClick={()=>iconClick(bottomMailIcon,mailIconActive,activeIcon,setActiveIcon,oldImg,setOldImg)}>
                        <img ref={bottomMailIcon} src={mailIcon}/>
                    </div>
                </div>
            </div>
            <div className={store.tweetSendingListDialogBox==false && store.tweetReplyOptionsDialogBox==false && store.bodyCoveringDiv==false ? 'coveringDiv' : 'coveringDiv coveringDiv-1'}></div>
            {props.members==true ? <Dialog id='membersDialogTag' open={true}><Members twitterCircle={props.twitterCircle} backLink={'/home'}/></Dialog> : <></>}
            {store.twitterBlue==true ? <Dialog id='twitterBlueDialogTag' open={true}><TwitterBlue/></Dialog> : <></>}
        </div>
    )
})
//mobx
//meterial ui