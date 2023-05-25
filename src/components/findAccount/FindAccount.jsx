import { useNavigate } from 'react-router-dom';
import './FindAccount.css';
import CloseBar from '../../icons/closeBar.svg';
import TwitterLogo from '../../icons/twitterLogo.svg';
import LoginInput from '../loginInput/LoginInput';
import { useRef, useState } from 'react';
import Button from '../button/Button';
import { navigationForward } from '../../utils/FindAccount';

export default function FindAccount(props)
{
    const navigate=useNavigate();
    const [activation,setActivation]=useState();
    const [buttonChange,setButtonChange]=useState();
    const wrongAccount=useRef();

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
                        <p className='findAccountTitle'>Find your Twitter account</p>
                        <p className='findAccountNote'>Enter the email, phone number or username associated with your account to change your password.</p>
                    </div>
                    <div className='userAccountVerify'>
                        <LoginInput text={'Email address, phone number or username'} setUserAccount={props.setUserAccount} setActivation={setActivation} setButtonChange={setButtonChange}/>
                    </div>
                </div>
                <div className='nextButton'>
                    <div className='next_button0'>
                        <div className='next_button'>
                            <Button onClick={()=>{navigationForward(props.liveLink,props.nextLink,wrongAccount,props.userAccount,props.setUserType)}} text={'Next'} activation={activation} class={'Next'} buttonChange={buttonChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={wrongAccount} className='wrongAccount'>
                <p>Sorry, We could not find your account</p>
            </div>
        </div>
    )
}