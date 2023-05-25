import { useNavigate } from 'react-router-dom'
import './CodeVerify.css'
import CloseBar from '../../icons/closeBar.svg';
import TwitterLogo from '../../icons/twitterLogo.svg'
import LoginInput from '../loginInput/LoginInput';
import { useRef, useState } from 'react';
import Button from '../button/Button';
import { navigationForward } from '../../utils/CodeVerify';

export default function CodeVerify(props)
{
    const navigate=useNavigate();
    const [activation,setActivation]=useState();
    const [buttonChange,setButtonChange]=useState();
    const [code,setCode]=useState();
    const [buttonText,setButtonText]=useState('Back')
    const [buttonClass,setButtonClass]=useState('skipProfile');
    const incorrectCode=useRef();

    return(
        <div className='loginPageOuterFormat'>
            <div className='loginPageInnerFormat'>
                <div className="loginPageHeader">
                    <div className='closeBar' onClick={()=>navigate('/')}>
                        <img src={CloseBar}/>
                    </div>
                    <div className='twitterLogo'>
                        <img src={TwitterLogo}/>
                    </div>
                </div>
                <div className='findAccountContent0'>
                    <div className='findAccountContentText'>
                        <p className='findAccountTitle'>We sent you a code</p>
                        <p className='findAccountNote'>Check your email to get your confirmation code. If you need to request a new code, go back and reselect a confirmation.</p>
                    </div>
                    <div className='userAccountVerify'>
                        <LoginInput text={'Enter your code'} setUserAccount={setCode} setActivation={setActivation} setButtonChange={setButtonChange} work={'forgotCode'} setButtonText={setButtonText} setButtonClass={setButtonClass}/>
                    </div>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigationForward(props.priorLink,props.liveLink,props.nextLink,buttonText,incorrectCode,code)}} text={buttonText} activation={true} class={buttonClass} buttonChange={buttonChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={incorrectCode} className='wrongAccount'>
                <p>Incorrect, Please try again.</p>
            </div>
        </div>
    )
}