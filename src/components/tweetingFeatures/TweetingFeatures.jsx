import './TweetingFeatures.css';
import imageIcon from '../../icons/imageIcon.svg';
import gifIcon from '../../icons/gifIcon.svg';
import pollingIcon from '../../icons/pollingIcon.svg';
import dateIcon from '../../icons/dateIcon.svg';
import locationIcon from '../../icons/locationIcon.svg';

export default function TweetingFeatures()
{
    return(
        <>
            <div className='imageTweet tweetingFeaturesIconDiv'>
                <img className='tweetingFeaturesIcon' src={imageIcon} />
            </div>
            <div className='gifTweet tweetingFeaturesIconDiv'>
                <img className='tweetingFeaturesIcon' src={gifIcon} />
            </div>
            <div className='pollTweet tweetingFeaturesIconDiv'>
                <img className='tweetingFeaturesIcon' src={pollingIcon} />
            </div>
            <div className='scheduleTweet tweetingFeaturesIconDiv'>
                <img className='tweetingFeaturesIcon' src={dateIcon} />
            </div>
            <div className='locationTweet tweetingFeaturesIconDiv'>
                <img className='tweetingFeaturesIcon' src={locationIcon} />
            </div>
        </>
    )
}