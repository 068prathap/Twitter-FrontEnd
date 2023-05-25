import { useNavigate } from 'react-router-dom';
import './ReasonForChangingPassword.css';
import CloseBar from '../../icons/closeBar.svg';
import TwitterLogo from '../../icons/twitterLogo.svg';
import Checkbox from '../checkbox/Checkbox';
import { useRef, useState } from 'react';
import { radioButtonClick } from '../../utils/ReasonForChangingPassword';
import Button from '../button/Button';
import { navigationForward } from '../../utils/ReasonForChangingPassword';

export default function ReasonForChangingPassword(props)
{
    const navigate=useNavigate();
    const radioButtonOuter1=useRef();
    const radioButton1=useRef();
    const radioButtonOuter2=useRef();
    const radioButton2=useRef();
    const radioButtonOuter3=useRef();
    const radioButton3=useRef();
    const [activation,setActivation]=useState();
    const [buttonChange,setButtonChange]=useState();
    const [reason,setReason]=useState();
    const reason1=useRef();
    const reason2=useRef();
    const reason3=useRef();

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
                <div className='findAccountContent0'>
                    <div className='findAccountContentText'>
                        <p className='findAccountTitle'>Why’d you change your password?</p>
                        <p className='findAccountNote'>Your feedback helps us understand when and why people need to change their passwords.</p>
                    </div>
                    <div className='emailList' onClick={()=>radioButtonClick(radioButtonOuter1,radioButton1,radioButtonOuter2,radioButton2,radioButtonOuter3,radioButton3,setActivation,setButtonChange,reason1,setReason)}>
                        <p ref={reason1} className='emailText'>I forgot my password</p>
                        <div ref={radioButtonOuter1} className='radioButtonOuter'>
                            <div ref={radioButton1} className='radioButton'>
                                <Checkbox/>
                            </div>
                        </div>
                    </div>
                    <div className='emailList reason2'  onClick={()=>radioButtonClick(radioButtonOuter2,radioButton2,radioButtonOuter1,radioButton1,radioButtonOuter3,radioButton3,setActivation,setButtonChange,reason2,setReason)}>
                        <p ref={reason2} className='emailText'>There was suspicious activity on my account</p>
                        <div ref={radioButtonOuter2} className='radioButtonOuter'>
                            <div ref={radioButton2} className='radioButton'>
                                <Checkbox/>
                            </div>
                        </div>
                    </div>
                    <div className='emailList reason3' onClick={()=>radioButtonClick(radioButtonOuter3,radioButton3,radioButtonOuter1,radioButton1,radioButtonOuter2,radioButton2,setActivation,setButtonChange,reason3,setReason)}>
                        <p ref={reason3} className='emailText'>I changed my password for a different reason</p>
                        <div ref={radioButtonOuter3} className='radioButtonOuter'>
                            <div ref={radioButton3} className='radioButton'>
                                <Checkbox/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigationForward(reason,props.userAccount,props.userType);navigate('/')}} text={'Next'} class={'Next'} activation={activation} buttonChange={buttonChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}