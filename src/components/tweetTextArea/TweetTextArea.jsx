import './TweetTextArea.css';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';

export default observer( function TweetTextArea()
{
    return(
        <span  onInput={(e)=> {store.tweet=e.currentTarget.innerText; store.tweet.length>0 && store.tweet.length<281 ? store.tweetButtonActivation=true : store.tweetButtonActivation=false}} className="textarea" role="textbox" contentEditable></span>
    )
})