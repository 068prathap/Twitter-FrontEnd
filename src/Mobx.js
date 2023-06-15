import { observable } from 'mobx';
import worldLogo from './icons/worldLogo.svg';

const mobxStore={
    name:'',
    username:'',
    profileImage:'',
    tweet:'',
    tweetButtonActivation:false,
    tweetSendingListDialogBox:false,
    tweetReplyOptionsDialogBox:false,
    tweetReplyOptionText:'Everyone can reply',
    tweetReplyOptionLogo:worldLogo,
    recommendedDetails:[],
    currentMembersPage:'',
    twitterCircleMembers:[],
    bodyCoveringDiv:false,
    exploreTab:true,
    searchHistory:JSON.parse(localStorage.getItem('exploreSearch')),
    twitterBlue:false,
    profilePageUrl:'',
    profileName:'',
    profileTweetCount:'',
    profileHeaderImg:'',
    profileImg:'',
    profileUsername:'',
    profileBio:'',
    profileLocation:'',
    profileDOB:'',
    profileCreateDate:'',
    profileFollowerCount:'',
    profileFollowingCount:'',
    profilewebsite:'',
    newLayout:false,
    dialogBoxs:{
        messageAddDialogBox:false,
    }
}

export const store=observable(mobxStore);