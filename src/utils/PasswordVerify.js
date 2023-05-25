export function OnFocus(password,passwordLabel)
{
    password.current.classList.add('passwordInput-1');
    passwordLabel.current.classList.add('passwordLabel-1');
    passwordLabel.current.classList.remove('passwordLabel-2');
}
export function OnBlur(password,passwordLabel,passwordInput)
{
    password.current.classList.remove('passwordInput-1');
    if(passwordInput.current.value=='')
    {
        passwordLabel.current.classList.remove('passwordLabel-1');
    }
    else
    {
        passwordLabel.current.classList.add('passwordLabel-2');
    }
}
export function Onchange(setButtonActive,setButtonChange,passwordInput,setPassword)
{
    if(passwordInput.current.value=='')
    {
        setButtonActive(false)
        setButtonChange(false)
    }
    else
    {
        setPassword(passwordInput.current.value);
        setButtonActive(true)
        setButtonChange(true)
    }
}
export function passwordTypeChange(passwordType,setPasswordType)
{
    setPasswordType(passwordType=='password'?'text':'password')
}