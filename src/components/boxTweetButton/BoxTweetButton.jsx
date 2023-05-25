import './BoxTweetButton.css';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';

export default observer( function BoxTweetButton()
{
    return(
        <button className={store.tweetButtonActivation==true ? 'tweetBoxTweetButton' : 'tweetBoxTweetButton tweetBoxTweetButton-1'} disabled={!store.tweetButtonActivation}>
            <p className='tweetBoxTweetButtonText'>Tweet</p>
        </button>
    )
})