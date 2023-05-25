import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateAccount from '../../components/createAccount/CreateAccount';
import SignupStep1 from '../../components/signupStep1/SignupStep1';
import SignupStep2 from '../../components/signupStep2/SignupStep2';
import SignupStep3 from '../../components/signupStep3/SignupStep3';
import './Signup.css';
import { useEffect, useRef, useState } from 'react';
import {Dialog} from '@material-ui/core';
import OTPDialogbox from '../../components/otpDialogbox/OTPDialogbox';
import SignupStep4 from '../../components/signupStep4/SignupStep4';
import SignupStep5 from '../../components/signupStep5/SignupStep5';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import UserName from '../../components/userName/UserName';
import NotificationAccess from '../../components/notificationAccess/NotificationAccess';

export default function Signup()
{
    const createAccount=useRef();
    const signupStep1=useRef();
    const signupStep2=useRef();
    const signupStep3=useRef();
    const[userData,setUserData]=useState(0);
    const su_2=useRef();
    const otpDialogTag=useRef();
    const signupStep4=useRef();
    const signupStep5=useRef();
    const profilePicture=useRef();
    const userName=useRef();
    const notificationAccess=useRef();

    return(
        <Dialog id='signup' open={true}>
            <div className="sign_up">
                <div ref={createAccount} className='createAccount'>
                    <CreateAccount nextLink={signupStep1} liveLink={createAccount} su_2={su_2}/>
                </div>
                <div ref={signupStep1} className='signupStep1'>
                    <SignupStep1 nextLink={signupStep2} liveLink={signupStep1} setUserData={setUserData}/>
                </div>
                <div ref={signupStep2} className='signupStep2'>
                    <SignupStep2 nextLink={signupStep3} liveLink={signupStep2} priorLink={signupStep1}/>
                </div>
                <div ref={signupStep3} className='signupStep3'>
                    <SignupStep3 liveLink={signupStep3} priorLink={signupStep2} step1Link={signupStep1} dialogTag={otpDialogTag} nextLink={signupStep4}/>
                </div>
                <Dialog ref={otpDialogTag} className='otpDialogTag' open={true}>
                    <OTPDialogbox userPhone={sessionStorage.getItem('userId')} liveLink={otpDialogTag} step1Link={signupStep1} nextLink={signupStep4}/>
                </Dialog>
                <div ref={signupStep4} className='signupStep4'>
                    <SignupStep4 liveLink={signupStep4} priorLink={signupStep3} nextLink={signupStep5}/>
                </div>
                <div ref={signupStep5} className='signupStep5'>
                    <SignupStep5 liveLink={signupStep5} nextLink={profilePicture}/>
                </div>
                <div ref={profilePicture} className='profilePicture'>
                    <ProfilePicture liveLink={profilePicture} nextLink={userName}/>
                </div>
                <div ref={userName} className='userName'>
                    <UserName liveLink={userName} nextLink={notificationAccess}/>
                </div>
                <div ref={notificationAccess} className='notificationAccess'>
                    <NotificationAccess/>
                </div>
            </div>
        </Dialog>
    )
}