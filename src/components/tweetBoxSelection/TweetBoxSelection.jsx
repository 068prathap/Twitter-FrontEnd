import './TweetBoxSelection.css';

export default function TweetBoxSelection(props)
{
    return(
        <div className='selectionDivOuter'>
            <div className='selectionTopicLogoOuter'>
                <div className='selectionTopicLogoDiv'>
                    <img className='selectionTopicLogo' src={props.selectionTopicLogo}/>
                </div>
            </div>
            <div className='selectionTopicTextDiv'>
                <p className='selectionTopicText'>{props.selectionTopicText}</p>
            </div>
            <div className={props.activeStatus==true ? 'selectionTickIconDiv' : 'selectionTickIconDiv selectionTickIconDiv-1'}>
                <img className='selectionTickIcon' src={props.selectionTickIcon}/>
            </div>
        </div>
    )
}