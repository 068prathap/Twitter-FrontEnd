import { ApiCall } from "./ApiCall"

export async function navigationForward(password,userAccount,userType,wrongPassword,navigate,store)
{
    let data={
        'password':password,
        [userType]:userAccount
    }
    let response=await ApiCall('post',data,'login');
    if(response.status==false)
    {
        wrongPassword.current.style.display='block';
        setTimeout(() => {
            wrongPassword.current.style.display='none';
        }, 3000);
    }
    else
    {
        localStorage.setItem('token',response.data);
        localStorage.setItem('exploreSearch',JSON.stringify([]));
        navigate('/home');
    }
}