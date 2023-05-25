import {useRef,useState} from 'react';
import passwordEye from '../../icons/passwordEye.svg';
import {OnFocus} from '../../utils/PasswordVerify';
import { OnBlur } from '../../utils/PasswordVerify';
import { passwordTypeChange } from '../../utils/PasswordVerify';
import { Onchange } from '../../utils/PasswordVerify';


export default function PasswordVerify(props)
{
    const password=useRef();
    const passwordLabel=useRef();
    const passwordInput=useRef();
    const passwordEyeType=useRef();
    const [passwordType,setPasswordType]=useState('password');

    return(
        <div ref={password} className={props.class}>
            <p ref={passwordLabel} className={props.labelClass}>Password</p>
            <div className='passwordWright'>
                <input ref={passwordInput} type={passwordType} onFocus={()=>OnFocus(password,passwordLabel)} onBlur={()=>OnBlur(password,passwordLabel,passwordInput)} onChange={()=>Onchange(props.setButtonActive,props.setButtonChange,passwordInput,props.setPassword)}></input>
                <img ref={passwordEyeType} src={passwordEye} alt="ss" onClick={()=>passwordTypeChange(passwordType,setPasswordType)}/>
            </div>
        </div>
    )
}