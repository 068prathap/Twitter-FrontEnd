export function CheckboxFunction(checkboxOuter,checkbox,userAccess,setUserAccess)
{
    checkboxOuter.current.classList.toggle('checkboxOuter-1');
    checkbox.current.classList.toggle('checkbox-1');
    setUserAccess(userAccess==true?false:true);
}

export function navigationForward(signupStep3,signupStep2)
{
    signupStep3.current.style.display='block';
    signupStep2.current.style.display='none';
}