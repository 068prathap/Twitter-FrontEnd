import './ProgressBar.css';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';

export default observer( function ProgressBar()
{
    return(
        <div style={{
            background:
                `radial-gradient(closest-side, white 80%, transparent 100% 100%),
                conic-gradient(${store.tweet.length<260 ? "rgb(29, 155, 240)" : store.tweet.length<280 ? "rgb(255, 212, 0)" : store.tweet.length<290 ? 'rgb(244, 33, 46)' : 'white'}  ${(store.tweet.length/270) * 100}%, lightgray 0)`
        }} className={store.tweet.length<260 ? "progress-bar" : "progress-bar progress-bar-1"}>
            <span className={store.tweet.length<280 ? "tweet-limit" : "tweet-limit tweet-limit-1"}>{store.tweet.length>=260 ? 280-store.tweet.length:<></>}</span>
            <progress value={(store.tweet.length/270) * 100} min="0" max="100" style={{
                // visibility: 'hidden',
                height: '0',
                width: '0'
            }}>75%</progress>
        </div>
    )
})