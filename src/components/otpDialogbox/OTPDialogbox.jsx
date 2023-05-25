import './OTPDialogbox.css';
import OTPDialogboxButton from '../../components/otpDialogboxButton/OTPDialogboxButton'
import { editingInfo } from '../../utils/OTPDialogbox';
import { navigationForward } from '../../utils/OTPDialogbox';

export default function OTPDialogbox(props)
{
    return(
        <div className='otpDialogbox'>
            <p className='verifyTitle'>Verify phone</p>
            <p className='verifyNote'>We'll text your verification code to {props.userPhone}.Standard SMS fees may apply.</p>
            <div className='otpDialogboxButton' onClick={()=>navigationForward(props.liveLink)}>
                <OTPDialogboxButton class={'okButton'} buttonText={'OK'}/>
            </div>
            <div className='otpDialogboxButton' onClick={()=>editingInfo(props.liveLink,props.step1Link,props.nextLink)}>    
                <OTPDialogboxButton class={'editButton'} buttonText={'Edit'}/>
            </div>
        </div>
    )
} 