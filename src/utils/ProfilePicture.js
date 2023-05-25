import { ApiCall } from "./ApiCall";

export function profileChange(event,addProfileInput,setProfile,profileSetupIcons,removeProfile,setButtonClass,setButtonText,setSendingProfile)
{
    // console.log(URL.createObjectURL(addProfileInput.current.files[0]))
    setProfile(URL.createObjectURL(addProfileInput.current.files[0]));
    console.log(event.target.files[0])
    setSendingProfile(event.target.files[0]);
    profileSetupIcons.current.classList.add('profileSetupIcons-1');
    removeProfile.current.style.display='flex';
    setButtonClass('Next-1');
    setButtonText('Next');
}

export function removeImage(defaultProfile,setProfile,profileSetupIcons,removeProfile,setButtonClass,setButtonText,addProfileInput)
{
    setProfile(defaultProfile);
    profileSetupIcons.current.classList.remove('profileSetupIcons-1');
    removeProfile.current.style.display='none';
    addProfileInput.current.value='';
    setButtonClass('skipProfile');
    setButtonText('Skip for now');
}
export function navigationForward(nextLink,liveLink,profile)
{
    console.log('pro',profile);
    liveLink.current.style.display='none';
    nextLink.current.style.display='block';
    const formData=new FormData();
    formData.append("file",profile);
    console.log('ihihi',profile);
    console.log(formData)
    ApiCall('postHeader',formData,'uploadprofilepic');
}