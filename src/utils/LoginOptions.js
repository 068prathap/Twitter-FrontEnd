import { ApiCall } from "./ApiCall"

export async function NavigateForward(userAccount,wrongAccount,liveLink,nextLink,setUserType)
{
    let user={
        'user':userAccount
    }
    let response=await ApiCall('post',user,'usercredentials');
    console.log(response);
    if(response.status==false)
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