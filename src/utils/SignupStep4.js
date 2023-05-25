import {ApiCall} from "./ApiCall";

export async function navigationForward(nextLink,liveLink,codeInput,codeIncorrectNote)
{
    if(codeInput.current.value==sessionStorage.getItem('otp'))
    {
        liveLink.current.style.display='none';
        nextLink.current.style.display='block';
        let userId=sessionStorage.getItem('userVerification');
        userId=userId.toLowerCase();
        let userData={
            [userId]:sessionStorage.getItem('userId'),
            name:sessionStorage.getItem('userName'),
            dateofbirth:sessionStorage.getItem('userDOB'),
            experience:sessionStorage.getItem('userAccess'),
            otp:sessionStorage.getItem('otp')
        }
        let token=await ApiCall('post',userData,'verifyotp');
        sessionStorage.setItem('token',token.data);
    }
    else
    {
        codeIncorrectNote.current.style.display='block';
        setTimeout(() => {
            codeIncorrectNote.current.style.display='none';
        }, 3000);
    }
}