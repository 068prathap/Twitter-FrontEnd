import { ApiCall } from "./ApiCall";

export async function friendProfile(data,setUser)
{
    let response=await (ApiCall('postHeaderlocal',data,'friendProfile'));
    setUser(response.data)
    console.log(response.data);
}