import './UserDetailsBox.css'
import FollowButton from '../followButton/FollowButton'

export default function UserDetailsBox(props)
{
    return (
        <div className='suggestedUserDialogBoxOuter'>
            <div className='suggestedUserDialogBox'>
                <div className='suggestedUserImgOuter'>
                    <div className='suggestedUserImgDiv'>
                        <img className='suggestedUserImg' src="" />
                    </div>
                    <div className='suggestedUserFollowButton'>
                        <FollowButton buttonName={props.buttonName} setButtonName={props.setButtonName} buttonClass={props.buttonClass} setButtonClass={props.setButtonClass}/>
                    </div>
                </div>
                <div className='suggestedPersonNameDiv'>
                    <p className='suggestedPersonName'>Prathap</p>
                </div>
                <div className='suggestedPersonUsernameDiv'>
                    <p className='suggestedPersonUsername'>@prathap143</p>
                </div>
                <div className='suggestedPersonBioDiv'>
                    <p className='suggestedPersonBio'>Unapologetically fearless</p>
                </div>
                <div className='suggestedPersonFriendsCount'>
                    <div className='suggestedPersonFollowingCountDiv'>
                        <p className='suggestedPersonFollowingCountText'><span className='suggestedPersonFollowingCount'>100</span>Following</p>
                    </div>
                    <div className='suggestedPersonFollowerCountDiv'>
                        <p className='suggestedPersonFollowerCountText'><span className='suggestedPersonFollowerCount'>100</span>Followers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}