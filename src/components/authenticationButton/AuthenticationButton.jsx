import './AuthenticationButton.css';
import GoogleLogo from '../../icons/googleLogo.svg'
import AppleLogo from '../../icons/appleLogo.svg'

export default function AuthenticationButton(props)
{
    return(
        <div className={props.class}>
            {props.class=='loginWithGoogle'?<img src={GoogleLogo}/>:<></>}
            {props.class=='loginWithApple'?<img src={AppleLogo}/>:<></>}
            <p>{props.text}</p>
        </div>
    )
}