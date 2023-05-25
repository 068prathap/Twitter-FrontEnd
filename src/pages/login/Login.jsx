import {Dialog} from '@material-ui/core';
import './Login.css';
import LoginOptions from '../../components/loginOptions/LoginOptions';
import LoginPassword from '../../components/loginPassword/LoginPassword';
import { useRef, useState } from 'react';

export default function Login()
{
    const loginOptions=useRef();
    const loginPassword=useRef();
    const [userType,setUserType]=useState();
    const [userAccount,setUserAccount]=useState();

    return(
        <Dialog className='login' open={true}>
            <div ref={loginOptions} className='loginOptions'>
                <LoginOptions liveLink={loginOptions} nextLink={loginPassword} setUserType={setUserType} userAccount={userAccount} setUserAccount={setUserAccount}/> 
            </div>
            <div ref={loginPassword} className='loginPassword'>
                <LoginPassword userType={userType} userAccount={userAccount}/>
            </div>
        </Dialog>
    )
}