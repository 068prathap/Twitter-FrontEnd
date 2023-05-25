import { ApiCall } from "./ApiCall";

export function iconClick(newRef,newImg,activeIcon,setActiveIcon,oldImg,setOldImg)
{
    activeIcon.current.src=oldImg;
    setOldImg(newRef.current.src);
    newRef.current.src=newImg;
    setActiveIcon(newRef);
}
export async function profileApicall(store)
{
    let userDetails=await ApiCall('getHeader','login','profile');
    store.name=userDetails.data[0].name;
    store.username=userDetails.data[0].username;
    store.profileImage=userDetails.data[0].profilepicture_url;
    store.profilePageUrl=userDetails.data[0].username;
}