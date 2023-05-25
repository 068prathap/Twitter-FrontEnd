import './NotifyFollowedMessage.css'
import { avadharIcon } from '../../utils/icongenerator';

export default function NotifyFollowedMessage()
{
    return(
        <div className='followedMessageOuter'>
            <div className='followedMessage'>
                <div className='followedavadharIcon'>{avadharIcon('rgb(29, 155, 240)','28px','28px')}</div>
                <div className='followedPersonDetail'>
                    <div className='followedPersonImgDiv'>
                        <img className='followedPersonImg' src="https://pbs.twimg.com/profile_images/1599315170919997440/Dr9tNjII_bigger.jpg"/>
                    </div>
                    <div className='followedPersonNameDiv'>
                        <p className='followedPersonName'>Shyam V</p>
                        <p className='personFollowed'>followed you</p>
                    </div>
                </div>
            </div>
        </div>
    )
}