import { ApiCall } from "./ApiCall";

export function navigationForward(liveLink,nextLink,userAccount,userType,password1)
{
    let data={
        [userType]:userAccount,
        'newpassword':password1
    }
    ApiCall('post',data,'updatepassword');
    liveLink.current.style.display='none';
    nextLink.current.style.display='block';
}