import { ApiCall } from "./ApiCall";

export async function ProfileTabApi(store,profile,username)
{
    let response
    if(profile)
    {
        response=await ApiCall('getHeader','profileTab','profile')
        response=response.data[0];
    }
    else
    {
        let temp=username;
        username='';
        for(var i=1;i<temp.length;i++)
        {
            username+=temp[i];
        }
        let data={
            friendUserName:username,
        }
        response=await ApiCall('postHeaderlocal',data,'friendProfile');
        response=response.data;
    }
    store.profileName=response.name;
    store.profileHeaderImg=response.header;
    store.profileImg=response.profilepicture_url;
    store.profileUsername=response.username;
    store.profileBio=response.bio;
    store.profileLocation=response.location;
    store.profileFollowingCount=response.following_count;
    store.profileFollowerCount=response.follower_count;
    store.profileTweetCount=response.tweet_count;
    if(response.birthdate!='null')
    {
        store.profileDOB = new Date(response.birthdate).toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }
    else
    {
        store.profileDOB=null;
    }
    store.profileCreateDate = new Date(response.createdat).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric'
    });
}