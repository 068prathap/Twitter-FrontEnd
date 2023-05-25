import { ApiCall } from "./ApiCall";

export async function ProfileTabApi(store)
{
    let response=await ApiCall('getHeader','profileTab','profile')
    response=response.data[0];
    console.log(response);
    store.profileName=response.name;
    store.profileHeaderImg=response.header;
    store.profileImg=response.profilepicture_url;
    store.profileUsername=response.username;
    store.profileBio=response.bio;
    store.profileLocation=response.location;
    store.profileFollowingCount=response.following_count;
    store.profileFollowerCount=response.follower_count;
    store.profileTweetCount=response.tweet_count;
    store.profileDOB = new Date(response.birthdate).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    store.profileCreateDate = new Date(response.createdat).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric'
    });
}