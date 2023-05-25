import { ApiCall } from "./ApiCall";

export async function gettingtwitterCircleMembers(store,setArray,array)
{
    let response;
    response=await ApiCall('getHeader','data','twittercircle')
    store.twitterCircleMembers=response.twittercircle;
}