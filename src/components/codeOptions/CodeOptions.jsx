import { useNavigate } from 'react-router-dom';
import './CodeOptions.css';
import CloseBar from '../../icons/closeBar.svg';
import TwitterLogo from '../../icons/twitterLogo.svg';
import Button from '../button/Button';
import { navigationForward } from '../../utils/CodeOptions';
import Checkbox from '../checkbox/Checkbox';
import { useRef,useEffect, useState } from 'react';
import { radioButtonClick } from '../../utils/CodeOptions';
import { emailEncode } from '../../utils/CodeOptions';

export default function CodeOptions(props)
{
    const navigate=useNavigate();
    const radioButton=useRef();
    const radioButtonOuter=useRef();
    let email='';
    const [activation,setActivation]=useState();
    const [buttonChange,setButtonChange]=useState();

    // useEffect(() => {
    //     email=emailEncode(props.userAccount);
    //   }, []);

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
                            <p className='codeOptionsTitle'>Where should we send a confirmation code?</p>
                        </div>
                        <div className='codeOptionsNote'>
                            <p className='codeOptionsNote0'>Before you can change your password, we need to make sure it’s really you.</p>
                            <p className='codeOptionsNote1'>Start by choosing where to send a confirmation code.</p>
                        </div>
                    </div>
                    <div className='emailList'>
                        <p className='emailText'>Send an {props.userType=='email'?'email':'text'} to {props.userAccount}</p>
                        <div ref={radioButtonOuter} className='radioButtonOuter' onClick={()=>radioButtonClick(radioButtonOuter,radioButton,setActivation,setButtonChange)}>
                            <div ref={radioButton} className='radioButton'>
                                <Checkbox/>
                            </div>
                        </div>
                    </div>
                    <div className='twitterSupport'>
                        <p>Contact <span>Twitter Support</span> if you don’t have access.</p>
                    </div>
                </div>
                <div className='nextButton topButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigationForward(props.liveLink,props.nextLink,props.userAccount,props.userType)}} text={'Next'} activation={activation} class={'Next'} buttonChange={buttonChange}/>
                        </div>
                    </div>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigate('/')}} text={'Cancel'} class={'skipProfile'} activation={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 