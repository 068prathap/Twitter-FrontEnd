import './UserDetailsBox.css'
import FollowButton from '../followButton/FollowButton'
import { ApiCall } from '../../utils/ApiCall';
import { useEffect, useState } from 'react';
import { friendProfile } from '../../utils/UserDetailsBox';

export default function UserDetailsBox(props)
{
    let data={
        friendUserName:props.user.username
    }
    const [user,setUser]=useState(null);

    useEffect(()=>{
        friendProfile(data,setUser)
    },[])

    return (
        <>
            {user!=null ?
                <div className='suggestedUserDialogBoxOuter'>
                    <div className='suggestedUserDialogBox'>
                        <div className='suggestedUserImgOuter'>
                            <div className='suggestedUserImgDiv'>
                                <img className='suggestedUserImg' src={user.profilepicture_url} />
                            </div>
                            <div className='suggestedUserFollowButton'>
                                <FollowButton buttonName={props.buttonName} setButtonName={props.setButtonName} buttonClass={props.buttonClass} setButtonClass={props.setButtonClass}/>
                            </div>
                        </div>
                        <div className='suggestedPersonNameDiv'>
                            <p className='suggestedPersonName'>{user.name}</p>
                        </div>
                        <div className='suggestedPersonUsernameDiv'>
                            <p className='suggestedPersonUsername'>@{user.username}</p>
                        </div>
                        <div className='suggestedPersonBioDiv'>
                            <p className='suggestedPersonBio'>{user.bio}</p>
                        </div>
                        <div className='suggestedPersonFriendsCount'>
                            <div className='suggestedPersonFollowingCountDiv'>
                                <p className='suggestedPersonFollowingCountText'><span className='suggestedPersonFollowingCount'>{user.follower_count}</span>Following</p>
                            </div>
                            <div className='suggestedPersonFollowerCountDiv'>
                                <p className='suggestedPersonFollowerCountText'><span className='suggestedPersonFollowerCount'>{user.following_count}</span>Followers</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}