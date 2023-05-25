import { ApiCall } from "./ApiCall";

export async function navigationForward(liveLink,nextLink,userAccount,userType)
{
    liveLink.current.style.display='none';
    nextLink.current.style.display='block';
    console.log(userType)
    let data={
        [userType]:userAccount
    }
    console.log(data);
    let response=await ApiCall('post',data,'otp');
    console.log(response);
    sessionStorage.setItem('otp',response.data);

}
export function radioButtonClick(radioButtonOuter,radioButton,setActivation,setButtonChange)
{
    radioButtonOuter.current.classList.add('radioButtonOuter-1');
    radioButton.current.classList.add('radioButton-1');
    setActivation(true);
    setButtonChange(true);
}
export function emailEncode(temp)
{
    let email=temp.substring(0, 1);
    for(var i=1;i<temp.length;i++)
    {
        if(temp[i]=='@' || temp[i]=='.')
        {
            email+=temp[i];
        }
        else
        {
            email+='*';
        }
    }
    return email;
}