import './SignupStep5.css';
import Backbar from '../backBar/backBar';
import SignupStep from '../signupStep/signupStep';
import { useState,useRef } from 'react';
import PasswordInput from '../passwordInput/PasswordInput';
import Button from '../button/Button'
import { navigationForward } from '../../utils/SignupStep5';

export default function SignupStep5(props)
{
    const[buttonChange,setButtonChange]=useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const passwordNeeds=useRef();
    const [password,setPassword]=useState();

    return(
        <div className="sign_up">
            <div className="su">
                <div className="signupHeader passwordSetupHeader">
                    <SignupStep step={5}/>
                </div>
                <div className='passwordSetup'>
                    <p className='passwordSetupTitle'>You'll need a password</p>
                    <p className='passwordSetupNote'>Make sure it’s 8 characters or more.</p>
                    <div className='passwordSetupInput'>
                        <PasswordInput class={'passwordInput'} labelClass={'passwordLabel'} labelText={'Password'} inputType={'password'} setButtonChange={setButtonChange} setButtonActive={setButtonActive} passwordNeeds={passwordNeeds} setPassword={setPassword}/>
                    </div>
                    <p ref={passwordNeeds} className='passwordNeeds'>Your password needs to be at least 8 characters. Please enter a longer one.</p>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigationForward(props.nextLink,props.liveLink,password)}} text={'Next'} activation={buttonActive} class={'Next'} buttonChange={buttonChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}