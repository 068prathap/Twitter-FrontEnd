import './LoginPassword.css'
import CloseBar from '../../icons/closeBar.svg';
import TwitterLogo from '../../icons/twitterLogo.svg';
import { useNavigate } from 'react-router-dom';
import PasswordVerify from '../passwordVerify/PasswordVerify';
import Button from '../button/Button';
import { navigationForward } from '../../utils/LoginPassword';
import { useRef, useState } from 'react';
import { observer } from "mobx-react";
import { store } from '../../Mobx';

export default observer(function LoginPassword(props)
{
    const navigate=useNavigate();
    const [buttonActive,setButtonActive]=useState(false);
    const [buttonChange,setButtonChange]=useState(false);
    const [password,setPassword]=useState('');
    const wrongPassword=useRef();

    return(
        <div className="loginPageOuterFormat">
            <div className="loginPageInnerFormat">
                <div className="loginPageHeader">
                    <div className='closeBar' onClick={()=>navigate('/')}>
                        <img src={CloseBar}/>
                    </div>
                    <div className='twitterLogo'>
                        <img src={TwitterLogo}/>
                    </div>
                </div>
                <div className='loginPasswordContent0'>
                    <div className='loginPasswordContent'>
                        <div className='passwordTitle'>
                            <p>Enter your password</p>
                        </div>
                    </div>
                </div>
                <div className='emailNotify'>
                    {props.userType=='email'?
                    <div className='emailNotifyArea'>
                        <p className='email'>Email</p>
                        <p className='emailId'>{props.userAccount}</p>
                    </div>:<></>}
                </div>
                <div className='passwordVerify'>
                    <PasswordVerify class={'passwordInput'} labelClass={'passwordLabel'} setButtonActive={setButtonActive} setButtonChange={setButtonChange} setPassword={setPassword}/>
                </div>
                <div className='forgotPasswordLink'>
                    <p>Forgot password?</p>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigationForward(password,props.userAccount,props.userType,wrongPassword,navigate,store)}} text={'Log in'} activation={buttonActive} class={'Next'} buttonChange={buttonChange}/>
                        </div>
                        <div className='notHaveAccount passwordPageSignup'>
                            <p>Don’t have an account? <span onClick={()=>navigate('/signup')}>Sign up</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={wrongPassword} className='wrongAccount'>
                <p>Wrong password!</p>
            </div>
        </div>
    )
})