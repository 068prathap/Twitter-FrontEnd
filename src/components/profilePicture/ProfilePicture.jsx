import './ProfilePicture.css';
import TwitterLogo from '../../icons/twitterLogo.svg';
import DefaultProfile from '../../icons/defaultProfile.png'
import AddProfile from '../../icons/addProfile.svg'
import { useState,useRef } from 'react';
import { profileChange } from '../../utils/ProfilePicture';
import RemoveProfile from '../../icons/removeProfile.svg'
import { removeImage } from '../../utils/ProfilePicture';
import Button from '../button/Button';
import { navigationForward } from '../../utils/ProfilePicture';

export default function ProfilePicture(props)
{
    const [profile,setProfile]=useState(DefaultProfile);
    const [sendingProfile,setSendingProfile]=useState(DefaultProfile)
    const addProfileInput=useRef();
    const removeProfile=useRef();
    const profileSetupIcons=useRef();
    const [buttonText,setButtonText]=useState('Skip for now');
    const [buttonClass,setButtonClass]=useState('skipProfile');

    return(
        <div className="su flex">
            <div className='profileSetupHeader'>
                <img src={TwitterLogo}></img>
            </div>
            <div className='profileIntro'>
                <p className='profileTitle'>Pick a profile picture</p>
                <p className='profileNote'>Have a favourite selfie? Upload it now.</p>
            </div>
            <div className='profileImage0'>
                <div className='profileImage1'>
                    <div className='profileImage2'>
                        <div ref={profileSetupIcons} className='profileSetupIcons'>
                            <div className='addProfile'>
                                <img className='addProfileSvg' src={AddProfile} alt="" srcset=""/>
                                <input ref={addProfileInput} className='addProfileInput' accept="image/jpeg,image/png,image/webp" type='file' title='' onChange={(event)=>profileChange(event,addProfileInput,setProfile,profileSetupIcons,removeProfile,setButtonClass,setButtonText,setSendingProfile)}></input>
                            </div>
                            <div ref={removeProfile} className='removeProfile' onClick={()=>removeImage(DefaultProfile,setProfile,profileSetupIcons,removeProfile,setButtonClass,setButtonText,addProfileInput)}>
                                <img className='removeProfileSvg' src={RemoveProfile} alt="" srcset="" />
                            </div>
                        </div>
                        <div className='imageBackground'></div>
                        <img className='defaultProfile' src={profile}></img>
                    </div>
                </div>
            </div>
            <div className='nextButton'>
                <div className='next_button0'>
                    <div className='next_button'>
                        <Button onClick={()=>navigationForward(props.nextLink,props.liveLink,sendingProfile)} text={buttonText} class={buttonClass} activation={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}