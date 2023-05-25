import TwitterLogo from '../../icons/twitterLogo.svg';
import './UserName.css';
import UserNameInput from '../userNameInput/UserNameInput';
import { useRef, useState } from 'react';
import Button from '../button/Button';
import { navigationForward } from '../../utils/UserName';

export default function UserName(props)
{
    const [incorrectNameNote,setIncorrectNameNote]=useState('');
    const incorrectUserName=useRef();
    const [buttonText,setButtonText]=useState('Skip for now');
    const [buttonClass,setButtonClass]=useState('skipProfile');
    const [buttonActive, setButtonActive] = useState(true);
    const [buttonChange,setButtonChange]=useState(false);
    const [userName,setUserName]=useState();

    return(
        <div className="su flex">
            <div className='profileSetupHeader'>
                <img src={TwitterLogo}></img>
            </div>
            <div className='userNameIntro'>
                <p className='userNameTitle'>What should we call you?</p>
                <p className='userNameNote'>Your @username is unique. You can always change it later.</p>
            </div>
            <div className='userNameInput'>
                <UserNameInput setIncorrectNameNote={setIncorrectNameNote} setButtonText={setButtonText} setButtonClass={setButtonClass} setButtonActive={setButtonActive} setButtonChange={setButtonChange} setUserName={setUserName}/>
            </div>
            <p ref={incorrectUserName} className='incorrectUserName'>{incorrectNameNote}</p>
            <div className='nextButton'>
                <div className='next_button0'>
                    <div className='next_button'>
                        <Button onClick={()=>navigationForward(props.nextLink,props.liveLink,userName)} text={buttonText} class={buttonClass} activation={buttonActive} buttonChange={buttonChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}