import { ApiCall } from "./ApiCall";

export async function navigationForward(liveLink,nextLink,wrongAccount,userAccount,setUserType)
{
    let user={
        'user':userAccount
    }
    let response=await ApiCall('post',user,'usercredentials');
    if(response.message=='Invalid credentials')
    {
        wrongAccount.current.style.display='block';
        setTimeout(() => {
            wrongAccount.current.style.display='none';
        }, 3000);
    }
    else
    {
        liveLink.current.style.display='none';
        nextLink.current.style.display='block';
        setUserType(response.data);
    }
}