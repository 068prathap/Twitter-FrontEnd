import { useNavigate } from 'react-router-dom';
import './PasswordChange.css';
import CloseBar from '../../icons/closeBar.svg';
import TwitterLogo from '../../icons/twitterLogo.svg';
import PasswordInput from '../../components/passwordInput/PasswordInput'
import { useState,useRef } from 'react';
import Button from '../button/Button';
import { navigationForward } from '../../utils/PasswordChange';

export default function PasswordChange(props)
{
    const navigate=useNavigate();
    const passwordNeeds=useRef();
    const [activation,setActivation]=useState();
    const [buttonChange,setButtonChange]=useState();
    const passwordConfirmNeeds=useRef();
    const [password1,setPassword1]=useState('');
    const [password2,setPassword2]=useState('');

    return(
        <div className='loginPageOuterFormat'>
            <div className='loginPageInnerFormat'>
                <div className="loginPageHeader">
                    <div className='closeBar' onClick={()=>navigate('/')}>
                        <img src={CloseBar}/>
                    </div>
                    <div className='twitterLogo'>
                        <img src={TwitterLogo}/>
                    </div>
                </div>
                <div className='codeOptionsContent'>
                    <div className='codeOptionsText'>
                        <div className='codeOptionsTitle'>
                            <p className='codeOptionsTitle'>Choose a new password</p>
                        </div>
                        <div className='codeOptionsNote passwordChangeNote'>
                            <p className='codeOptionsNote0'>Make sure your new password is 8 characters or more. Try including numbers, letters and punctuation marks for a <span>strong password</span>.</p>
                            <p className='codeOptionsNote1'>You’ll be logged out of all active Twitter sessions after your password is changed.</p>
                        </div>
                    </div>
                    <div className='passwordChangeInput'>
                        <PasswordInput class={'passwordInput'} labelClass={'passwordLabel'} purpose={'checking'} labelText={'Enter a new password'} inputType={'password'} setButtonChange={setButtonChange} setButtonActive={setActivation} passwordNeeds={passwordNeeds} setPassword={setPassword1} password2={password2}/>
                    </div>
                    <p ref={passwordNeeds} className='passwordNeeds'>Your password needs to be at least 8 characters. Please enter a longer one.</p>
                    <div className='passwordChangeInput confirmPassword'>
                        <PasswordInput class={'passwordInput'} labelClass={'passwordLabel'} purpose={'checkingOnly'} labelText={'Confirm your password'} inputType={'password'} setButtonChange={setButtonChange} setButtonActive={setActivation} passwordNeeds={passwordConfirmNeeds} setPassword={setPassword2} password1={password1}/>
                    </div>
                    <p ref={passwordConfirmNeeds} className='passwordNeeds'>Passwords do not match.</p>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigationForward(props.liveLink,props.nextLink,props.userAccount,props.userType,password1)}} text={'Change password'} activation={true} class={'Next'} buttonChange={buttonChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}