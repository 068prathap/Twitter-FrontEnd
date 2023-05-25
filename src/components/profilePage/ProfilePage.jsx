import './ProfilePage.css'
import { leftDirectionArrow } from '../../utils/icongenerator'
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import { ProfileTabApi } from '../../utils/ProfileTabApi';
import { locationIcon } from '../../utils/icongenerator';
import { balloonIcon } from '../../utils/icongenerator';
import { calendarIcon } from '../../utils/icongenerator';
import TopNavbar from '../topNavbar/TopNavbar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Dialog } from '@material-ui/core';
import EditProfile from '../editProfile/EditProfile';

export default observer( function ProfilePage()
{
    let navList=['Tweets','Replies','Media','Likes'];
    let navListNavigation=[`/${store.profilePageUrl}`,`/${store.profilePageUrl}/replies`,`/${store.profilePageUrl}/media`,`/${store.profilePageUrl}/likes`]
    const[currentNavTab,setCurrentNavTab]=useState(0);
    const [editProfile,setEditProfile]=useState(false);

    ProfileTabApi(store);

    return(
        <div className='profilePageOuter'>
            <div className='profilePage'>
                <div className='profilePageHeaderOuter'>
                    <div className='profilePageHeader'>
                        <div className='profilePageBackIcon'>{leftDirectionArrow('rgb(15, 20, 25)','19px','19px')}</div>
                        <div className='profilePageHeaderDetails'>
                            <p className='profileHeaderName'>{store.profileName}</p>
                            <p className='profileTweetsCount'>{store.profileTweetCount} Tweets</p>
                        </div>
                    </div>
                </div>
                <div className='profilePageBigImgOuter'>
                    <div className={store.profileHeaderImg!=null ? 'profilePageBigImgDiv' : 'profilePageBigImgDiv profilePageBigImgDiv-1'}>
                        {store.profileHeaderImg!=null ?
                            <img className='profilePageBigImg' src={store.profileHeaderImg}/>
                            :
                            <></>
                        }
                    </div>
                </div>
                <div className={store.profileHeaderImg!=null ? 'profilePageEditOuter' : 'profilePageEditOuter profilePageEditOuter-1'}>
                    <div className='profilePageEdit'>
                        <div className='profilePagePrfileImgDiv'>
                            <img className='profilePageProfileImg' src='https://pbs.twimg.com/profile_images/1426558998354960385/hMwV9rp2_200x200.jpg'/>
                        </div>
                        <div className='profilePageEditeButtonOuter' onClick={()=>{setEditProfile(true)}}>
                            <div className='profilePageEditeButton'>
                                <p className='profilePageEditeButtonText'>Edit profile</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profilePageDetailsOuter'>
                    <div className='profilePageDetails'>
                        <p className='profilePageName'>{store.profileName}</p>
                        <p className='profilePageUserName'>@{store.profileUsername}</p>
                    </div>
                </div>
                <div className='profilePageBioOuter'>
                    <div className='profilePageBio'>
                        <p className='profilePageBioText'>{store.profileBio}</p>
                    </div>
                </div>
                <div className='profilePagePersonalDetailsOuter'>
                    <div className='profilePagePersonalDetails'>
                        <div className='profilePageLocationDiv'>
                            <div className='profilePageLocationIcon'>{locationIcon('rgb(83, 100, 113)','17.5px','17px')}</div>
                            <p className='profilePageLocation'>{store.profileLocation}</p>
                        </div>
                        <div className='profilePageDOBDiv'>
                            <div className='profilePageDOBIcon'>{balloonIcon('rgb(83, 100, 113)','17.5px','17.5px')}</div>
                            <p className='profilePageDOB'>Born {store.profileDOB}</p>
                        </div>
                        <div className='profilePageJoinDataDiv'>
                            <div className='profilePageJoinDateIcon'>{calendarIcon('rgb(83, 100, 113)','17.5px','17.5px')}</div>
                            <p className='profilePageJoinDate'>Joined {store.profileCreateDate}</p>
                        </div>
                    </div>
                </div>
                <div className='followerFollowingCountDiv'>
                    <div className='followerFollowingCount'>
                        <p className='followingCountText'><span className='followingCount'>{store.profileFollowingCount}</span> Following</p>
                        <p className='followerCountText'><span className='followerCount'>{store.profileFollowerCount}</span> Followers</p>
                    </div>
                </div>
                <div className='pofilePageTopNavbarOuter'>
                    <div className='pofilePageTopNavbar'>
                        {navList.map((tab,index)=>{
                            return(
                                <TopNavbar tab={tab} index={index} currentNavTab={currentNavTab} setCurrentNavTab={setCurrentNavTab} navigate={navListNavigation[index]}/>
                            )
                        })}
                    </div>
                </div>
                <Outlet/>
                {editProfile==true ? <Dialog open={true}><EditProfile/></Dialog> : <></>}
            </div>
        </div>
    )
})