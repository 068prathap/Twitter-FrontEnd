import { ApiCall } from "./ApiCall";

export function Onfocus(userNameInputBox,userNameLabel,userNameAt,setAtIcon,AtIconActive)
{
    userNameInputBox.current.classList.add('userNameInputBox-1');
    userNameLabel.current.classList.add('userNameLabel-1');
    userNameAt.current.classList.add('userNameAt-1');
    userNameInputBox.current.classList.remove('userNameInputBox-3');
    userNameLabel.current.classList.remove('userNameLabel-3');
    setAtIcon(AtIconActive);
}
export function Onblur(userNameInputBox,userNameLabel,userNameAt,inputUserName,setAtIcon,AtIconDeactive)
{
    if(inputUserName.current.value=='')
    {
        userNameInputBox.current.classList.remove('userNameInputBox-1');
        userNameLabel.current.classList.remove('userNameLabel-1');
        userNameAt.current.classList.remove('userNameAt-1');
    }
    else if(userNameInputBox.current.classList.contains('userNameInputBox-2'))
    {
        userNameInputBox.current.classList.add('userNameInputBox-3');
        setAtIcon(AtIconDeactive)
    }
    else
    {
        userNameInputBox.current.classList.remove('userNameInputBox-1');
        userNameLabel.current.classList.add('userNameLabel-3');
        setAtIcon(AtIconDeactive);
    }
}
export async function Onchange(inputUserName,userNameInputBox,userNameLabel,setIncorrectNameNote,correctName,wrongName,setButtonText,setButtonClass,setButtonActive,setButtonChange,setUserName)
{
    if(inputUserName.current.value.length<=4 && inputUserName.current.value!='')
    {
        userNameInputBox.current.classList.add('userNameInputBox-2');
        userNameLabel.current.classList.add('userNameLabel-2');
        setIncorrectNameNote('Your username must be longer than 4 characters.')
        wrongName.current.style.display='block';
        correctName.current.style.display='none';
        setButtonActive(false);
        setButtonChange(false);
    }
    else if(inputUserName.current.value.length>=15)
    {
        userNameInputBox.current.classList.add('userNameInputBox-2');
        userNameLabel.current.classList.add('userNameLabel-2');
        setIncorrectNameNote('Your username must be shorter than 15 characters.');
        wrongName.current.style.display='block';
        correctName.current.style.display='none';
        setButtonActive(false);
        setButtonChange(false);
    }
    else
    {
        let username={
            'username':inputUserName.current.value
        }
        let response=await ApiCall('postHeader',username,'checkusername');
        console.log(response)
        if(response.status==true)
        {
            userNameInputBox.current.classList.remove('userNameInputBox-2');
            userNameLabel.current.classList.remove('userNameLabel-2');
            setIncorrectNameNote('');
            correctName.current.style.display='block';
            wrongName.current.style.display='none';
            setUserName(inputUserName.current.value);
            setButtonActive(true);
            setButtonChange(true);
        }
        else
        {
            userNameInputBox.current.classList.add('userNameInputBox-2');
            userNameLabel.current.classList.add('userNameLabel-2');
            setIncorrectNameNote('username already exist, please try another one');
            wrongName.current.style.display='block';
            correctName.current.style.display='none';
            setButtonActive(false);
            setButtonChange(false);
        }
    }
    if(inputUserName.current.value.length=='')
    {
        wrongName.current.style.display='none';
        correctName.current.style.display='none';
        setButtonText('Skip for now');
        setButtonClass('skipProfile');
        setButtonActive(true);
    }
    else
    {
        setButtonText('Next');
        setButtonClass('Next');
    }
}