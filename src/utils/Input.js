import Axios from 'axios';

export function onFocus(js,inputBox,inputLabel,inputCount,input)
{
    inputLabel.current.classList.toggle('input_label-1');
    inputBox.current.classList.toggle('input_box-1');
    if(js==0)
    {
        inputCount.current.style.display='flex';
        input.current.classList.toggle('input-1');
    }
    if(inputBox.current.classList.contains('input_box-2'))
    {
        inputBox.current.classList.remove('input_box-3');
        inputLabel.current.classList.add('input_label-3');
    }
    if(js==1 && inputLabel.current.classList.contains('input_label-3'))
    {
        inputBox.current.classList.remove('input_box-3');
        inputBox.current.classList.add('input_box-2');
    }
}

export function onBlur(js,inputBox,inputLabel,inputCount,input,invalidInput,propsValue,propsSetname,propsSetnumber_id,pnObj,invalidNote,propsInvalid,propsSetinvalid,eiObj)
{
    inputLabel.current.classList.toggle('input_label-1')
    inputBox.current.classList.toggle('input_box-1')
    if(js==0)
    {
        inputCount.current.style.display='none';
        input.current.classList.toggle('input-1');
    }
    if(input.current.value!='')
    {
        inputLabel.current.classList.add('input_label-2')
    }
    if(input.current.value=='')
    {
        inputLabel.current.classList.remove('input_label-2')
    }
    if(inputBox.current.classList.contains('input_box-2'))
    {
        inputBox.current.classList.add('input_box-3');
    }
    inputLabel.current.classList.remove('input_label-3')
}

export async function inputChange(js,inputBox,inputLabel,input,invalidInput,setcount,invalidNote,setInvalid,propsValue,propsSetname,propsSetnumber_id,propsInvalid,propsSetinvalid,eiObj,pnObj,setUserData)
{
    let input_word=input.current.value;
    setcount(input_word.length);
    if(input_word==0 && js==0)
    {
        inputBox.current.classList.add('input_box-2');
        inputLabel.current.classList.add('input_label-3')
        invalidInput.current.classList.add('invalid_input-1')
    }
    else if(js==0)
    {
        inputBox.current.classList.remove('input_box-2');
        inputLabel.current.classList.remove('input_label-3')
        invalidInput.current.classList.remove('invalid_input-1')
    }
    if(js==1)
    {
        inputBox.current.classList.remove('input_box-3');
        inputLabel.current.classList.remove('input_label-3')
        inputBox.current.classList.remove('input_box-2');
        invalidInput.current.classList.remove('invalid_input-1')
    }
    if(js==1 && invalidNote!='')
    {
        setInvalid(invalidNote);
    }
    if(propsValue=='Name')
    {
        sessionStorage.setItem("userName", input.current.value);
        propsSetname(input.current.value);
        setUserData(input.current.value);
    }
    if(propsValue=='Phone')
    {
        let check_phone=/^\d+$/.test(input.current.value);
        if((input.current.value.length!=10 || !check_phone) && input.current.value.length!=0)
        {
            inputBox.current.classList.add('input_box-3');
            inputLabel.current.classList.add('input_label-3')
            invalidInput.current.classList.add('invalid_input-1')
            propsSetnumber_id('');
        }
        else
        {   
            let response;
            pnObj.phone_number=input.current.value;
            Axios.post("http://192.168.1.77:8080/checkphone", pnObj)
            .then((res) => {
                response=res.data;
                if(response.status==true)
                {
                    propsSetnumber_id(input.current.value);
                }
                else
                {
                    invalidNote=propsInvalid;
                    propsSetinvalid('Phone number has already been taken.');
                    inputBox.current.classList.add('input_box-3');
                    inputLabel.current.classList.add('input_label-3')
                    invalidInput.current.classList.add('invalid_input-1')
                    propsSetnumber_id('');
                }
            });
            // if(response=='Success')
            // {
            //     sessionStorage.setItem("userId", input.current.value);
            //     propsSetnumber_id(input.current.value);
            //     setUserData(input.current.value);
            // }
            // else
            // {
            //     invalidNote=propsInvalid;
            //     propsSetinvalid('Phone number has already been taken.');
            //     inputBox.current.classList.add('input_box-3');
            //     inputLabel.current.classList.add('input_label-3')
            //     invalidInput.current.classList.add('invalid_input-1')
            //     propsSetnumber_id('');
            // }
        }
    }
    if(propsValue=='Email')
    {
        let check_email= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.current.value);
        if(check_email==false && input.current.value!='')
        {
            inputBox.current.classList.add('input_box-3');
            inputLabel.current.classList.add('input_label-3')
            invalidInput.current.classList.add('invalid_input-1')
            propsSetnumber_id('');
        }
        else
        {
            let response;
            eiObj.email_id=input.current.value;
            console.log(eiObj);
            Axios.post("http://192.168.1.77:8080/checkemail", eiObj)
            .then((res) => {
                response=res.data;
                if(response.status==true)
                {
                    propsSetnumber_id(input.current.value);
                    setUserData(input.current.value);
                    sessionStorage.setItem("userId", input.current.value);
                }
                else
                {
                    invalidNote=propsInvalid;
                    propsSetinvalid('Email has already been taken.');
                    inputBox.current.classList.add('input_box-3');
                    inputLabel.current.classList.add('input_label-3')
                    invalidInput.current.classList.add('invalid_input-1')
                    propsSetnumber_id('');
                }
            }).catch((error)=>{console.log(error);console.log('hi');});
            // if(response=='Success')
            // {
            //     sessionStorage.setItem("userId", input.current.value);
            //     propsSetnumber_id(input.current.value);
            //     setUserData(input.current.value);
            // }
            // else
            // {
            //     invalidNote=propsInvalid;
            //     propsSetinvalid('Email has already been taken.');
            //     inputBox.current.classList.add('input_box-3');
            //     inputLabel.current.classList.add('input_label-3')
            //     invalidInput.current.classList.add('invalid_input-1')
            //     propsSetnumber_id('');
            // }
        }
    }
}