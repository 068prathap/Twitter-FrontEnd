export function OnFocus(code,codeLabel)
{
    code.current.classList.add('code-1');
    codeLabel.current.classList.add('codeLabel-1');
    codeLabel.current.classList.remove('codeLabel-2');
}

export function OnBlur(code,codeLabel,codeInput)
{
    if(codeInput.target.value=='')
    {
        codeLabel.current.classList.remove('codeLabel-1');
    }
    else
    {
        codeLabel.current.classList.add('codeLabel-2');
    }
    code.current.classList.remove('code-1');
}

export function OnChange(codeInput,setButtonChange,setButtonActive)
{
    if(codeInput.current.value!='')
    {
        setButtonChange(true);
        setButtonActive(true);
    }
    else
    {
        setButtonChange(false);
        setButtonActive(false);
    }
}