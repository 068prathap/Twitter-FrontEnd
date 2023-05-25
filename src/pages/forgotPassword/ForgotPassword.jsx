import './ForgotPassword.css';
import {Dialog} from '@material-ui/core';
import FindAccount from '../../components/findAccount/FindAccount';
import { useRef, useState } from 'react';
import CodeOptions from '../../components/codeOptions/CodeOptions';
import CodeVerify from '../../components/codeVerify/CodeVerify';
import PasswordChange from '../../components/passwordChange/PasswordChange';
import ReasonForChangingPassword from '../../components/reasonForChangingPassword/ReasonForChangingPassword';

export default function ForgotPassword()
{
    const [userAccount,setUserAccount]=useState();
    const findAccount=useRef(); 
    const codeOptions=useRef();
    const codeVerify=useRef();
    const passwordChange=useRef();
    const [userType,setUserType]=useState();
    const reasonForChangingPassword=useRef();

    return(
        <Dialog id='signup' open={true}>
            <div ref={findAccount} className='findAccount'>
                <FindAccount setUserAccount={setUserAccount} liveLink={findAccount} nextLink={codeOptions} userAccount={userAccount} setUserType={setUserType}/>
            </div>
            <div ref={codeOptions} className='codeOptions'>
                <CodeOptions userAccount={userAccount} liveLink={codeOptions} nextLink={codeVerify} userType={userType}/>
            </div>
            <div ref={codeVerify} className='codeVerify'>
                <CodeVerify priorLink={codeOptions} liveLink={codeVerify} nextLink={passwordChange}/>
            </div>
            <div ref={passwordChange} className='passwordChange'>
                <PasswordChange liveLink={passwordChange} nextLink={reasonForChangingPassword} userAccount={userAccount} userType={userType}/>
            </div>
            <div ref={reasonForChangingPassword} className='reasonForChangingPassword'>
                <ReasonForChangingPassword userAccount={userAccount} userType={userType}/>
            </div>
        </Dialog>
    )
}