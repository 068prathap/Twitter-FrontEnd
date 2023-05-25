import { ApiCall } from "./ApiCall";

export function navigationForward(nextLink,liveLink,password)
{
    let userPassword={
        'password':password
    }
    ApiCall('postHeader',userPassword,'password');  
    liveLink.current.style.display='none';  
    nextLink.current.style.display='block';  
}