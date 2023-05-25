import './PasswordInput.css';
import {OnFocus} from '../../utils/PasswordInput';
import { useEffect, useRef,useState } from 'react'; 
import {OnBlur} from '../../utils/PasswordInput';
import {OnChange} from '../../utils/PasswordInput';
import passwordEye from '../../icons/passwordEye.svg';
import { passwordTypeChange } from '../../utils/PasswordInput';
import { checking } from '../../utils/PasswordInput';

export default function VerifcationInput(props)
{
    const password=useRef();
    const passwordLabel=useRef();
    const passwordInput=useRef();
    const passwordEyeType=useRef();
    const [passwordType,setPasswordType]=useState('password');

    useEffect(() => {
        props.purpose=='checkingOnly'?checking(props.password1,passwordInput,props.passwordNeeds,password,passwordLabel,'out',props.setPassword,props.setButtonChange,props.setButtonActive):<></>;
      });

    return(
        <div ref={password} className={props.class}>
            <p ref={passwordLabel} className={props.labelClass}>{props.labelText}</p>
            <div className='passwordWright'>
                <input ref={passwordInput} type={passwordType} onFocus={()=>OnFocus(password,passwordLabel)} onBlur={()=>OnBlur(password,passwordLabel,passwordInput)} onChange={()=>{props.purpose=='checkingOnly'?checking(props.password1,passwordInput,props.passwordNeeds,password,passwordLabel,'in',props.setPassword,props.setButtonChange,props.setButtonActive):OnChange(passwordInput,props.setButtonChange,props.setButtonActive,props.passwordNeeds,password,passwordLabel,props.setPassword,props.purpose,props.password2);}}></input>
                <img ref={passwordEyeType} src={passwordEye} alt="ss" onClick={()=>passwordTypeChange(passwordType,setPasswordType)}/>
            </div>
        </div>
    )
}