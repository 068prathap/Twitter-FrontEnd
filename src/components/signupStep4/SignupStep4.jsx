import Backbar from '../backBar/backBar';
import SignupStep from '../signupStep/signupStep';
import './SignupStep4.css'
import VerifcationInput from '../verificationInput/VerificationInput';
import Button from '../button/Button'
import { navigationForward } from '../../utils/SignupStep4';
import { useRef, useState } from 'react';

export default function SignupStep4(props)
{
    let codeType='';
    const[buttonChange,setButtonChange]=useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const codeIncorrectNote=useRef();
    const codeInput=useRef();

    if(sessionStorage.getItem('userVerification')=='Phone')
    {
        codeType='text';
    }
    else
    {
        codeType='email';
    }
    
    return(
        <div className="sign_up">
            <div className="su">
                <div className="signupHeader">
                    <Backbar priorLink={props.priorLink} liveLink={props.liveLink}/>
                    <SignupStep step={4}/>
                </div>
                <div className='codeVerification'>
                    <p className='verificationTitle'>We sent you a code</p>
                    <p className='verificationNote'>Enter it below to verify {sessionStorage.getItem('userId')}.</p>
                    <div className='verificationCode'>
                        <VerifcationInput class={'otp_code'} labelClass={'codeLabel'} inputRef={codeInput} inputType={'text'} setButtonChange={setButtonChange} setButtonActive={setButtonActive}/>
                    </div>
                    <p className='codeNotsend'>Didn't receive a {codeType}?</p>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigationForward(props.nextLink,props.liveLink,codeInput,codeIncorrectNote)}} text={'Next'} activation={buttonActive} class={'Next'} buttonChange={buttonChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={codeIncorrectNote} className='codeIncorrectNote'>
                <p>The code you entered is incorrect. Please try again</p>
            </div>
        </div>
    )
}