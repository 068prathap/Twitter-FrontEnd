import { ApiCall } from "./ApiCall";

export async function friendSuggestionList(setFriendList,setApiFinish)
{
    let data={
        limit:3,
        offset:0,
    }
    let response;
    response=await ApiCall('postHeaderlocal',data,'friendsuggestions')
    setFriendList(response.data);
    setApiFinish(true);
}