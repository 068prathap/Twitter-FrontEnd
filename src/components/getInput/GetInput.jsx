import './GetInput.css';
import { useState,useRef } from 'react';
import { onFocus } from '../../utils/Input';
import { onBlur } from '../../utils/Input';
import { inputChange } from '../../utils/Input';

export default function Input( props )
{
    const[count, setcount]=useState(0);
    const inputBox=useRef();
    const inputLabel=useRef();
    const inputCount=useRef();
    const input=useRef();
    const invalidInput=useRef();
    let invalid_note=props.invalid;
    const[check_verify,setCheck_verify]=useState('Phone');
    let js=props.js;
    let pn_obj={
        'phone_number':''
    }
    let ei_obj={
        'email_id':''
    }

    if(props.js==1 && props.value!=check_verify)
    {
        setCheck_verify(props.value);
    }
    if(props.js==1 && props.value!=check_verify)
    {
        input.current.value = '';
        inputLabel.current.classList.remove('input_label-2');
        inputLabel.current.classList.remove('input_label-3');
        inputBox.current.classList.remove('input_box-3');
        invalidInput.current.classList.remove('invalid_input-1');
    }

    return(
        <div className={props.class}>
            <div ref={inputBox} className='input_box'>
                <label for='input' className={props.inputValue==true ? 'inputlabel input_label-2 ' : 'input_label'} ref={inputLabel}>{props.value}</label>
                <p className='input_count' ref={inputCount}>{count} / 50</p>
                <input type="text" ref={input} id="input" Value={props.inputValue==true ? props.name : ''} className="input" onFocus={()=>onFocus(js,inputBox,inputLabel,inputCount,input)} onBlur={()=>onBlur(js,inputBox,inputLabel,inputCount,input,invalidInput,props.value,props.setname,props.setnumber_id,pn_obj,invalid_note,props.invalid,props.setinvalid,ei_obj)} onChange={()=>inputChange(js,inputBox,inputLabel,input,invalidInput,setcount,invalid_note,props.setinvalid,props.value,props.setname,props.setnumber_id,props.invalid,props.setinvalid,ei_obj,pn_obj,props.setUserData)} maxLength='50'></input>
            </div>
            <div className='invalid_input' ref={invalidInput}>
                <p>{props.invalid}</p>
            </div>
        </div>
    )
}