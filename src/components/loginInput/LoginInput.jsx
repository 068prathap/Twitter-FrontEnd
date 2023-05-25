import { useRef } from 'react'
import './LoginInput.css'
import { Onfocus } from '../../utils/LoginInput';
import { Onblur } from '../../utils/LoginInput';
import { Onchange } from '../../utils/LoginInput';

export default function LoginInput(props)
{
    const loginInputBox=useRef();
    const loginInputLabl=useRef();
    const loginInputTag=useRef();

    return(
        <div ref={loginInputBox} className='loginInputBox' onFocus={()=>Onfocus(loginInputBox,loginInputLabl)} onBlur={()=>Onblur(loginInputBox,loginInputLabl,loginInputTag)} onChange={()=>Onchange(props.setUserAccount,loginInputTag,props.setActivation,props.setButtonChange,props.work,props.setButtonText,props.setButtonClass)}>
            <p ref={loginInputLabl} className='loginInputLabl'>{props.text}</p>
            <input ref={loginInputTag} type="text"/>
        </div>
    )
}