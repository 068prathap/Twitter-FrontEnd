import './NewMessageAddedList.css'
import { closeIcon } from '../../utils/icongenerator'

export default function NewMessageAddedList(props)
{
    function handleClick()
    {
        props.setMessageAddedList(props.messageAddedList.slice(0, props.index).concat(props.messageAddedList.slice(props.index + 1)))
    }

    return(
        <div className='newAddedMessageOuter' on onClick={()=>{handleClick()}}>
            <div className='newAddedMessage'>
                <div className='newAddedMessageImgDiv'>
                    <img className='newAddedMessageImg' src={props.user.profilepicture_url}/>
                </div>
                <div className='newAddedMessageNameDiv'>
                    <p className='newAddedMessageName'>{props.user.username}</p>
                </div>
                <div className='newAddedMessageCloseDiv'>
                    <div className='newAddedMessageClose'>{closeIcon('rgb(29, 155, 240)','17.5px','17.5px')}</div>
                </div>
            </div>
        </div>
    )
}