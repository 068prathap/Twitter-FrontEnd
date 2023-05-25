import './LoginOptions.css';
import CloseBar from '../../icons/closeBar.svg'
import TwitterLogo from '../../icons/twitterLogo.svg'
import AuthenticationButton from '../authenticationButton/AuthenticationButton';
import LoginInput from '../loginInput/LoginInput';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { NavigateForward } from '../../utils/LoginOptions';

export default function LoginOptions(props)
{
    const navigate=useNavigate();
    const wrongAccount=useRef();
    const [activation,setActivation]=useState();
    const [buttonChange,setButtonChange]=useState();

    return(
        <div className="loginPageOuterFormat">
            <div className="loginPageInnerFormat">
                <div>
                    <div className="loginPageHeader">
                        <div className='closeBar' onClick={()=>navigate('/')}>
                            <img src={CloseBar}/>
                        </div>
                        <div className='twitterLogo'>
                            <img src={TwitterLogo}/>
                        </div>
                    </div>
                    <div className='loginPageContent0'>
                        <div className='loginPageContent'>
                            <div className='loginTitle'>
                                <p>Sign in to Twitter</p>
                            </div>
                            <div className='googleLogin'>
                                <AuthenticationButton class={'loginWithGoogle'} text={'Sign in with Google'}/>
                            </div>
                            <div className='appleLogin'>
                                <AuthenticationButton class={'loginWithApple'} text={'Sign in with Apple'}/>
                            </div>
                            <div className='horizontalLine'>
                                <div className='firstHalfLine'>
                                    <hr/>
                                </div>
                                <div className='middleWordInLine'>
                                    <p>or</p>
                                </div>
                                <div className='SecountHalfLine'>
                                    <hr/>
                                </div>
                            </div>
                            <div className='loginInput'>
                                <LoginInput setUserAccount={props.setUserAccount} text={'Phone, email address, or username'} setActivation={setActivation} setButtonChange={setButtonChange}/>
                            </div>
                            <div className='loginNextButton'>
                                <Button onClick={()=>NavigateForward(props.userAccount,wrongAccount,props.liveLink,props.nextLink,props.setUserType)} class={'Next-1 loginButton'} text={'Next'} activation={true}/>
                            </div>
                            <div className='loginForgotButton'>
                                <Button onClick={()=>navigate('/password_reset')} class={'skipProfile loginButton'} text={'Forgot password?'} activation={true}/>
                            </div>
                            <div className='notHaveAccount'>
                                <p>Don’t have an account? <span onClick={()=>navigate('/signup')}>Sign up</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={wrongAccount} className='wrongAccount'>
                <p>Sorry, We could not find your account</p>
            </div>
        </div>
    )
}