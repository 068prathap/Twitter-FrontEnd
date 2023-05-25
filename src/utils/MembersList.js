import { ApiCall } from "./ApiCall";

export async function twitterCircleRemove(index,store)
{
    store.twitterCircleMembers.splice(index, 1);
    let response;
    response=await ApiCall('getHeader','data','followcount/recommended');
    store.recommendedDetails=response.followers;
}