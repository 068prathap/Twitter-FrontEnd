import './ConfrimInput.css';
import verifiedTick from '../../icons/verifiedTick.svg';
import { ChangingInfo } from '../../utils/ConfrimInput';

export default function ConfrimInput(props)
{
    return(
        <div className={props.class}>
            <div className={props.labelClass}>
                <label>{props.labelText}</label>
            </div>
            <div className={props.inputClass}>
                <input type={props.inputType} value={props.inputValue} onFocus={()=>ChangingInfo(props.liveLink,props.step1Link)}></input>
                <img src={verifiedTick} alt="ss" srcset="" />
            </div>
        </div>
    )
}