import './ReplyOption.css';

export default function ReplyOption(props)
{
    return(
        <div className='tweetingAreaReplyOption'>
            <div className='replyOptionWorldIconDiv'>
                <img className='replyOptionWorldIcon' src={props.tweetReplyOptionLogo} />
            </div>
            <div className='replyOptionTextDiv'>
                <p className='replyOptionText'>{props.tweetReplyOptionText}</p>
            </div>
        </div>
    )
}