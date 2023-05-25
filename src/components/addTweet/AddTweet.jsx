import './AddTweet.css'
import plusSymbol from '../../icons/plusSymbol.svg';

export default function AddTweet()
{
    return(
        <div className='addTweetIconDiv'>
            <img className='addTweetIcon' src={plusSymbol} />
        </div>
    )
}