import { useState } from 'react'
import './FollowSuggestionList.css'
import UserDetailsBox from '../userDetailsBox/UserDetailsBox'
import FollowButton from '../followButton/FollowButton'
import { observer } from 'mobx-react'
import { store } from '../../Mobx'
import { useNavigate } from 'react-router-dom'

export default observer( function FollowSuggestionList(props)
{
    const [buttonName, setButtonName] = useState('follow')
    const [buttonClass, setButtonClass] = useState('followButton')
    const [dialogBox,setDialogBox]=useState('');
    const navigate=useNavigate();

    return (
        <div className='suggestedUserOuter'>
            <div className='suggestedUser'>
                <div className='recommendedFollowerDetails' onClick={()=>{store.profilePageUrl=props.user.username;localStorage.setItem('profileURL',props.user.username);navigate(`/${props.user.username }`)}}>
                    <div className='recommendedFollowerImgDiv' onMouseOver={()=>{setDialogBox('profileDialog')}} onMouseOut={()=>{setDialogBox('')}}>
                        <img className='recommendedFollowerImg' src={props.user.profilepicture_url} />
                        {dialogBox=='profileDialog' ? <UserDetailsBox buttonName={buttonName} setButtonName={setButtonName} buttonClass={buttonClass} setButtonClass={setButtonClass} user={props.user}/> : <></>}
                    </div>
                    <div className='recommendedFollowerNameDetails'>
                        <div className='recommendedFollowerNameDiv' onMouseOver={()=>{setDialogBox('nameDialog')}} onMouseOut={()=>{setDialogBox('')}}>
                            <p className='recommendedFollowerName'>{props.user.name}</p>
                            {dialogBox=='nameDialog' ? <UserDetailsBox buttonName={buttonName} setButtonName={setButtonName} buttonClass={buttonClass} setButtonClass={setButtonClass} user={props.user}/> : <></>}
                        </div>
                        <div className='recommendedUserFollowerUsernameDiv' onMouseOver={()=>{setDialogBox('usernameDialog')}} onMouseOut={()=>{setDialogBox('')}}>
                            <p className='recommendedFollowerUsername'>@{props.user.username}</p>
                            {dialogBox=='usernameDialog' ? <UserDetailsBox buttonName={buttonName} setButtonName={setButtonName} buttonClass={buttonClass} setButtonClass={setButtonClass} user={props.user}/> : <></>}
                        </div>
                    </div>
                </div>
                <FollowButton buttonName={buttonName} setButtonName={setButtonName} buttonClass={buttonClass} setButtonClass={setButtonClass} id={props.user.id}/>
            </div>
        </div>
    )
})