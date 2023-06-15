import { ApiCall } from "./ApiCall";

export async function gettingrecommendedDetails(store)
{
    let response;
    response=await ApiCall('getHeader','data','followcount/recommended');
    console.log(response);
    store.recommendedDetails=response.followers;
}

export async function gettingrecommendedSearchDetails(store,value,setInputValue)
{
    let data={
        name:value,
    }
    let response;
    response=await ApiCall('postHeaderlocal',data,'search');
    if(response.data.length!=0)
    {
        store.recommendedDetails=response.data;
        setInputValue(true);
    }
    else
    {
        gettingrecommendedDetails(store);
        setInputValue(false);
    }
}