import './VerificationInput.css';
import {OnFocus} from '../../utils/VerificationInput'
import { useRef, useState } from 'react'; 
import {OnBlur} from '../../utils/VerificationInput'
import {OnChange} from '../../utils/VerificationInput'


export default function VerifcationInput(props)
{
    const code=useRef();
    const codeLabel=useRef();
    const inputCount=useRef();

    return(
        <div ref={code} className={props.class}>
            {props.editProfileBio==true ?
                <>
                    <p ref={codeLabel} className={props.labelClass}>{props.inputName}</p>
                    <p className='input_count input_count-1' ref={inputCount}>{props.count} / {props.maxCount}</p>
                    {props.locWeb==true ?
                        <input className='editProfileInputBox' value={props.value} maxLength={props.maxCount} ref={props.inputRef} type={props.inputType} onFocus={()=>{OnFocus(code,codeLabel);inputCount.current.style.display='flex';}} onBlur={(e)=>{OnBlur(code,codeLabel,e);inputCount.current.style.display='none';}} onChange={(e)=>{OnChange(props.inputRef,props.setButtonChange,props.setButtonActive);props.setValue(e.target.value)}}></input>
                        :
                        <textarea maxLength='160' value={props.bio} ref={props.inputRef} onFocus={()=>{OnFocus(code,codeLabel);inputCount.current.style.display='flex';}} onBlur={(e)=>{OnBlur(code,codeLabel,e);inputCount.current.style.display='none';}} onChange={(e)=>{OnChange(props.inputRef,props.setButtonChange,props.setButtonActive); console.log("reff ",props.inputRef.current.value); props.setBio(e.target.value)}}/>
                    }
                </>
                :
                <>
                    <p ref={codeLabel} className={props.labelClass}>Verification code</p>
                    <input ref={props.inputRef} type={props.inputType} onFocus={()=>OnFocus(code,codeLabel)} onBlur={()=>OnBlur(code,codeLabel,props.inputRef)} onChange={()=>OnChange(props.inputRef,props.setButtonChange,props.setButtonActive)}></input>
                </>
            }
        </div>
    )
}