import './SendingOption.css';

import downArrow from '../../icons/downArrow.svg';
import greenDownArrow from '../../icons/greenDownArrow.svg';

export default function SendingOption(props)
{
    return(
        <div className={props.sendEveryone==true ? 'tweetingAreaSendingOption' : 'tweetingAreaSendingOption tweetingAreaSendingOption-1'}>
            <div className='tweetingAreaSendingOptionInner'>
                <div className='sendingOptionTextDiv'>
                    <p className={props.sendEveryone==true ? 'sendingOptionText' : 'sendingOptionText sendingOptionText-1'}>{props.currentSendingOption}</p>
                </div>
                <div className='sendingOptionListIconDiv'>
                    <img className={props.sendEveryone==true ? 'sendingOptionListIcon' : 'sendingOptionListIcon sendingOptionListIcon-1'} src={downArrow} />
                    <img className={props.sendEveryone==true ? 'sendingOptionListIcon sendingOptionListIcon-1': 'sendingOptionListIcon'} src={greenDownArrow}/>
                </div>
            </div>
        </div>
    )
}