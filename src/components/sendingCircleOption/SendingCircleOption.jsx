import './SendingCircleOption.css'
import tweetCircleAvatar from '../../icons/tweetCircleAvatar.svg'
import blueTick from '../../icons/blueTick.svg';
import { useNavigate } from 'react-router-dom';

export default function SendingCircleOption(props)
{
    const navigate =useNavigate();

    return (
        <div className='sendingCircleOption'>
            <div className='sendingCircleOptionLogoDiv'>
                <img className='sendingCircleOptionLogo' src={tweetCircleAvatar} />
            </div>
            <div className='sendingTweetCircle'>
                <div className='sendingTweetCircleDiv'>
                    <p className='sendingTweetCircleText'>Twitter Circle</p>
                </div>
                <div className='tweetCircleList'>
                    <div className='tweetCirclePeopleList'>
                        <p className='tweetCirclePeopleText'><span className='tweetCirclePeopleCount'>0</span> People</p>
                    </div>
                    <div className='tweetCircleEditOption' onClick={()=>navigate('/members')}>
                        <p className='tweetCircleEditText'>Edit</p>
                    </div>
                </div>
            </div>
            <div className={props.sendEveryone == true ? 'sendingOptionSelectedTickDiv tweetCircleSelectedTick' : 'sendingOptionSelectedTickDiv'}>
                <img className='sendingOptionSelectedTick' src={blueTick} />
            </div>
        </div>
    )
}