import AtIconActive from '../../icons/atIconActive.svg';
import AtIconDeactive from '../../icons/atIconDeactive.svg';
import './UserNameInput.css';
import { Onfocus } from '../../utils/UserNameInput';
import { useRef, useState } from 'react';
import { Onblur } from '../../utils/UserNameInput';
import { Onchange } from '../../utils/UserNameInput';
import verifiedTick from '../../icons/verifiedTick.svg';
import ExclamationIcon from '../../icons/exclamationIcon.svg';

export default function UserNameInput(props)
{
    const userNameInputBox=useRef();
    const userNameLabel=useRef();
    const userNameAt=useRef();
    const [atIcon,setAtIcon]=useState(AtIconActive);
    const inputUserName=useState();
    const correctName=useState();
    const wrongName=useState();

    return(
        <div ref={userNameInputBox} className="userNameInputBox">
            <p ref={userNameLabel} className='userNameLabel'>Username</p>
            <div className="enterUserName">
                <img ref={userNameAt} className='userNameAt' src={atIcon}/>
                <input ref={inputUserName} className='inputUserName' type='text' onFocus={()=>Onfocus(userNameInputBox,userNameLabel,userNameAt,setAtIcon,AtIconActive)} onBlur={()=>Onblur(userNameInputBox,userNameLabel,userNameAt,inputUserName,setAtIcon,AtIconDeactive)} onChange={()=>Onchange(inputUserName,userNameInputBox,userNameLabel,props.setIncorrectNameNote,correctName,wrongName,props.setButtonText,props.setButtonClass,props.setButtonActive,props.setButtonChange,props.setUserName)}></input>
                <img ref={correctName} className='correctName' src={verifiedTick} alt="ss" srcset="" />
                <img ref={wrongName} className='wrongName' src={ExclamationIcon} alt="ss" srcset="" />
            </div>
        </div>
    )
}