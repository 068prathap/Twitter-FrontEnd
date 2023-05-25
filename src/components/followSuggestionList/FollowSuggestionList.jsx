import { useState } from 'react'
import './FollowSuggestionList.css'
import UserDetailsBox from '../userDetailsBox/UserDetailsBox'
import FollowButton from '../followButton/FollowButton'

export default function FollowSuggestionList() 
{
    const [buttonName, setButtonName] = useState('follow')
    const [buttonClass, setButtonClass] = useState('followButton')
    const [dialogBox,setDialogBox]=useState('');

    return (
        <div className='suggestedUserOuter'>
            <div className='suggestedUser'>
                <div className='recommendedFollowerDetails'>
                    <div className='recommendedFollowerImgDiv' onMouseOver={()=>{setDialogBox('profileDialog')}} onMouseOut={()=>{setDialogBox('')}}>
                        <img className='recommendedFollowerImg' src={''} />
                        {dialogBox=='profileDialog' ? <UserDetailsBox buttonName={buttonName} setButtonName={setButtonName} buttonClass={buttonClass} setButtonClass={setButtonClass}/> : <></>}
                    </div>
                    <div className='recommendedFollowerNameDetails'>
                        <div className='recommendedFollowerNameDiv' onMouseOver={()=>{setDialogBox('nameDialog')}} onMouseOut={()=>{setDialogBox('')}}>
                            <p className='recommendedFollowerName'>Vikram</p>
                            {dialogBox=='nameDialog' ? <UserDetailsBox buttonName={buttonName} setButtonName={setButtonName} buttonClass={buttonClass} setButtonClass={setButtonClass}/> : <></>}
                        </div>
                        <div className='recommendedUserFollowerUsernameDiv' onMouseOver={()=>{setDialogBox('usernameDialog')}} onMouseOut={()=>{setDialogBox('')}}>
                            <p className='recommendedFollowerUsername'>@chiyaan</p>
                            {dialogBox=='usernameDialog' ? <UserDetailsBox buttonName={buttonName} setButtonName={setButtonName} buttonClass={buttonClass} setButtonClass={setButtonClass}/> : <></>}
                        </div>
                    </div>
                </div>
                <FollowButton buttonName={buttonName} setButtonName={setButtonName} buttonClass={buttonClass} setButtonClass={setButtonClass}/>
            </div>
        </div>
    )
}