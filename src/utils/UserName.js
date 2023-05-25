import { ApiCall } from "./ApiCall";

export function navigationForward(nextLink,liveLink,userName)
{
    nextLink.current.style.display='block';
    liveLink.current.style.display='none';
    let username={
        'username':userName
    }
    ApiCall('postHeader',username,'insertusername');
}