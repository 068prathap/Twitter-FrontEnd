import { ApiCall } from "./ApiCall";

export async function gettingrecommendedDetails(store)
{
    let response;
    response=await ApiCall('getHeader','data','followcount/recommended');
    store.recommendedDetails=response.followers;
}