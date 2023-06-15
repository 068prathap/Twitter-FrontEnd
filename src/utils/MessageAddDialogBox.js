import { ApiCall } from "./ApiCall";

export async function getUserDetails(setMessageList,value)
{
    let data={
        name:value
    }
    let response=await ApiCall('postHeaderlocal',data,'search');
    if(response.data.length==0)
    {
        setMessageList([])
    }
    else
    {
        setMessageList(response.data)
    }
}