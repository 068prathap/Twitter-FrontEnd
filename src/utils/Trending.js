import { ApiCall } from "./ApiCall";

export async function ForYouTrendingList(SetArray,setApiFinish)
{
    let data={
        limit:30,
        offset:0,
    }
    let response;
    if(window.location.pathname=='/explore/for-you')
    {
        data.limit=13;
        data.offset=4;
        response=await ApiCall('postHeaderlocal',data,'trendingHashtags')
    }
    else if(window.location.pathname=='/explore/trending')
    {
        response=await ApiCall('postHeaderlocal',data,'trending')
    }
    else if(window.location.pathname=='/explore/news')
    {
        response=await ApiCall('postHeaderlocal',data,'trending/news')
    }
    else if(window.location.pathname=='/explore/sports')
    {
        response=await ApiCall('postHeaderlocal',data,'trending/sports')
    }
    else if(window.location.pathname=='/explore/entertainment')
    {
        response=await ApiCall('postHeaderlocal',data,'trending/entertainment')
    }
    else
    {
        data.limit=4;
        data.offset=0;
        response=await ApiCall('postHeaderlocal',data,'trendingHashtags')
    }
    SetArray(response.data);
    setApiFinish(true);
}