import './NotifyTextMessage.css'
import twitterLogo from '../../icons/twitterLogo.svg'

export default function NotifyTextMessage()
{
    return(
        <div className='messageOuter'>
            <div className='message'>
                <div className='messagetwitterLogoOuter'>
                    <img className='messagetwitterLogo' src={twitterLogo}/>
                </div>
                <p className='notifyMessageText'>There was a login to your account @068prathap from a new device on 19 May 2023. Review it now.</p>
            </div>
        </div>
    )
}