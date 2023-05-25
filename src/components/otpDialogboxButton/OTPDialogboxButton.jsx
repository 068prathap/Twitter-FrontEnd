import './OTPDialogboxButton.css';

export default function OTPDialogboxButton(props)
{
    return(
        <div className={props.class}>
            <p>{props.buttonText}</p>
        </div>
    )
}