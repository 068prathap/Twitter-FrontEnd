import './SignupButton.css';

export default function SignupButton(props)
{
    return(
        <button className={props.class}><p>{props.buttonText}</p></button>
    )
}