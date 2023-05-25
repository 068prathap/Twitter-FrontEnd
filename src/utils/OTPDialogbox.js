import Axios from 'axios';
import {ApiCall} from "./ApiCall";

export function editingInfo(liveLink,step1Link,nextLink)
{
    liveLink.current.style.display='none'
    step1Link.current.style.display='block'
    nextLink.current.style.display='none';
}

export async function navigationForward(liveLink)
{
    liveLink.current.style.display='none';
    let phonenumber=sessionStorage.getItem('userId');
    let userId={
        'phonenumber':phonenumber
    }
    let otp=await ApiCall('post',userId,'otp'); 
    sessionStorage.setItem('otp',otp);
}