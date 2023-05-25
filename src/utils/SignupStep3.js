import {ApiCall} from "./ApiCall";

export async function navigationForward(liveLink,dialogTag,nextLink)
{
    if(sessionStorage.getItem('userVerification')=='Phone')
    {
        dialogTag.current.style.display='block'
    }
    liveLink.current.style.display='none';
    nextLink.current.style.display='block';
    if(sessionStorage.getItem('userVerification')=='Email')
    {
        let email=sessionStorage.getItem('userId');
        let userId={
            'email':email
        }
        let otp=await ApiCall('post',userId,'otp');
        sessionStorage.setItem('otp',otp.data);
    }
}