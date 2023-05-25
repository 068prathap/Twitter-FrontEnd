import Backbar from '../backBar/backBar';
import SignupStep from '../signupStep/signupStep';
import './SignupStep3.css';
import ConfrimInput from '../../components/confrimInput/ConfrimInput';
import SignupButton from '../../components/signupButton/SignupButton'
import {navigationForward} from '../../utils/SignupStep3';

export default function SignupStep3(props)
{
    return(
        <div className="sign_up">
            <div className="su">
                <div className="signupHeader">
                    <Backbar priorLink={props.priorLink} liveLink={props.liveLink}/>
                    <SignupStep step={3}/>
                </div>
                <div className='confrimData0'>
                    <div className='confrimData'>
                        <div className='dataTitle'>
                            <p>Create your account</p>
                        </div>
                        <div className='inputData'>
                            <ConfrimInput class={'confrimInput confrimInput0'} labelClass={'confrimInputLabel'} labelText={'Name'} inputClass={'confrimInputInputArea'} inputType={'text'} inputValue={sessionStorage.getItem('userName')} liveLink={props.liveLink} step1Link={props.step1Link}/>
                            <ConfrimInput class={'confrimInput'} labelClass={'confrimInputLabel'} labelText={sessionStorage.getItem('userVerification')} inputClass={'confrimInputInputArea'} inputType={'text'} inputValue={sessionStorage.getItem('userId')} liveLink={props.liveLink} step1Link={props.step1Link}/>
                            <ConfrimInput class={'confrimInput'} labelClass={'confrimInputLabel'} labelText={'Date of birth'} inputClass={'confrimInputInputArea'} inputType={'text'} inputValue={sessionStorage.getItem('userDOB')} liveLink={props.liveLink} step1Link={props.step1Link}/>
                        </div>
                    </div>
                </div>
                <div className='policyButton0'>
                    <div className='policyButton1'>
                        <div className='policyButton2'>
                            <div className='servicePolicy'>
                                <p>By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>, including <a>Cookie Use</a>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalising our services, including ads. <a>Learn more</a>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <a>here</a>.</p>
                            </div>
                            <div className='signupButtonOuter' onClick={()=>navigationForward(props.liveLink,props.dialogTag,props.nextLink)}>
                                <SignupButton class={'signupButton'} buttonText={'Sign up'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}