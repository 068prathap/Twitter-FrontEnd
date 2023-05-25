import './AllNotifyContent.css';
import { observer } from 'mobx-react';
import NotifyTextMessage from '../notifyTextMessage/NotifyTextMessage';
import NotifyFollowedMessage from '../notifyFollowedMessage/NotifyFollowedMessage';

export default observer( function NotifyContent()
{
    return(
        <div className='notifyContentOuter'>
            <div className='notifyContent'>
                <NotifyTextMessage/>
                <NotifyTextMessage/>
                <NotifyFollowedMessage/>
            </div>
        </div>
    )
})