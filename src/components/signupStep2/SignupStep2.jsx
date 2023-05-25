import Back_bar from '../../components/backBar/backBar';
import SignupStep from '../../components/signupStep/signupStep';
import './SignupStep2.css';
import Checkbox from '../../components/checkbox/Checkbox';
import { useRef,useState } from 'react';
import {CheckboxFunction} from '../../utils/SignupStep2';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button'
import {navigationForward} from '../../utils/SignupStep2';

export default function SignupStep2(props)
{
    const checkboxOuter=useRef();
    const checkbox=useRef();
    const navigate = useNavigate();
    const [userAccess,setUserAccess]=useState(false);
    sessionStorage.setItem('userAccess',userAccess);

    return(
        <div className="sign_up">
            <div className="su">
                <div className="header_in_signup">
                    <Back_bar priorLink={props.priorLink} liveLink={props.liveLink}/>
                    <SignupStep step={2}/>
                </div>
                <div className="personal_access">
                    <div className="personal_access1">
                        <div className="personal_access2">
                            <div className='customise_title'>
                                <p>Customise your experience</p>
                            </div>
                            <div className='track_note'>
                                <p>Track where you see Twitter content across the web</p>
                            </div>
                            <div className='choose_checkbox'>
                                <div className='checkbox_note'>
                                    <p>Twitter uses this data to personalise your experience. This web browsing history will never be stored with your name, email, or phone number.</p>
                                </div>
                                <div ref={checkboxOuter} className='checkboxOuter' onClick={()=>CheckboxFunction(checkboxOuter,checkbox,userAccess,setUserAccess)}>
                                    <div ref={checkbox} className='checkbox'>
                                        <Checkbox/>
                                    </div>
                                </div>
                            </div>
                            <div className='termsprivacy'>
                                <p>By signing up, you agree to our <a href='#'>Terms</a>, <a href='#'>Privacy Policy</a> and <a href='#'>Cookie Use</a>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. <a href='#'>Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>navigationForward(props.nextLink,props.liveLink)} text={'Next'} class={'Next-1'} activation={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}