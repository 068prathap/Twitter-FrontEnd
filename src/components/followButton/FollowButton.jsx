import './FollowButton.css'
import { AddFollower } from '../../utils/FollowButton';
import { RemoveFollower } from '../../utils/FollowButton';

export default function FollowButton(props)
{
    return (
        <div className='followButtonOuter' onClick={()=>{props.buttonName=='follow' ? AddFollower(props.id) : RemoveFollower(props.id)}}>
            <div className={props.buttonClass}
                onClick={() => {
                    if (props.buttonName === "follow") {
                        props.setButtonName('following'); props.setButtonClass('followingButton')
                    }
                    else if (props.buttonClass == 'followingButton') {
                        props.setButtonName('follow'); props.setButtonClass('followButton')
                    }
                }}
                onMouseEnter={() => { props.buttonClass == 'followingButton' ? props.setButtonName('unfollow') : <></> }}
                onMouseLeave={() => { props.buttonClass == 'followingButton' ? props.setButtonName('following') : <></> }}
            >
                {props.buttonName == 'follow' ? <p className='followButtonText'>Follow</p> : <></>}
                {props.buttonName == 'following' ? <p className='followingButtonText'>Following</p> : <></>}
                {props.buttonName == 'unfollow' ? <p className='unfollowButtonText'>Unfollow</p> : <></>}
            </div>
        </div>
    )
}