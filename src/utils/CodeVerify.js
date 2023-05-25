export function navigationForward(priorLink,liveLink,nextLink,buttonText,incorrectCode,code)
{
    if(buttonText=='Back')
    {
        priorLink.current.style.display='block';
        liveLink.current.style.display='none';
    }
    else
    {
        if(code==sessionStorage.getItem('otp'))
        {
            nextLink.current.style.display='block';
            liveLink.current.style.display='none';
        }
        else
        {
            incorrectCode.current.style.display='block';
            setTimeout(() => {
                incorrectCode.current.style.display='none';
            }, 3000);
        }
    }
}