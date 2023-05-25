import './SignupStep1.css';
import GetInput from '../getInput/GetInput';
import { useState } from 'react';
import Dob from '../selection/Selection';
import Button from '../button/Button';
import { change_verify } from '../../utils/SignupStep1';
import { navigationForward } from '../../utils/SignupStep1';
import { useNavigate } from 'react-router-dom';

let temp = 0;
export default function SignupStep1(props)
{
    const [invalid_message, setinvalid_message] = useState('Please enter a valid phone number.');
    const [name, setname] = useState('');
    const [number_id, setnumber_id] = useState('');
    const [month, setmonth] = useState('');
    const [day, setday] = useState('');
    const [year, setyear] = useState('');
    const [buttonActive, setButtonActive] = useState(false)
    const [input_verify, setinput_verify] = useState('Phone');
    const [verify, setverify] = useState('Email');
    let years = [' '];
    const[buttonChange,setButtonChange]=useState();
    const navigate=useNavigate();

    for (var i = 2023; i >= 1903; i--)
    {
        years.push(i);
    }
    if (name != '' && number_id != '' && month != '' && day != '' && year != '')
    {
        if(temp==0)
        {
            temp = 1;
            sessionStorage.setItem("userName", name);
            sessionStorage.setItem("userVerification", input_verify);
            sessionStorage.setItem("userId", number_id);
            let dob=day+' '+month+' '+year;
            sessionStorage.setItem("userDOB", dob);
            setButtonActive(true);
            setButtonChange(true);
            props.setUserData(1);    
        }
    }
    else if(temp==1)
    {
        setButtonActive(false);
        setButtonChange(false);
        temp=0;
        props.setUserData(0);
    }

    return (
        <div className="sign_up">
            <div className="su">
                <div className="su_1">
                    <div className="su1">
                        <div className="su1_1-s1" onClick={()=>navigate('/')}>
                            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
                        </div>
                        <div className="su1_2-s1">
                            <p>Step 1 of 5</p>
                        </div>
                    </div>
                </div>
                <div className='personal_data'>
                    <div className='step1'>
                        <div className='s1'>
                            <div className='s1_1'>
                                <p>Create your account</p>
                            </div>
                            <div className='input_area'>
                                <GetInput value={'Name'} js={0} invalid={"What's your name?"} name={name} setname={setname} setUserData={props.setUserData}/>
                                <GetInput value={input_verify} js={1} class={'input_phone'} invalid={invalid_message} setinvalid={setinvalid_message} number_id={number_id} setnumber_id={setnumber_id} setUserData={props.setUserData}/>
                                <div className='change_verify' onClick={()=>change_verify(verify,setinput_verify,setverify,setnumber_id,setinvalid_message)}>
                                    <p>Use <span>{verify}</span> instead</p>
                                </div>
                                <div className='dob_title'>
                                    <p>Date of birth</p>
                                </div>
                                <div className='dob_note'>
                                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                                </div>
                                <div className='dob'>
                                    <Dob class={'Month'} arr={[' ', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']} value={month} setvalue={setmonth} />
                                    <Dob class={'Day'} arr={[' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]} value={day} setvalue={setday} />
                                    <Dob class={'Year'} arr={years} value={year} setvalue={setyear} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigationForward(props.nextLink,props.liveLink)}} text={'Next'} activation={buttonActive} class={'Next'} buttonChange={buttonChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}