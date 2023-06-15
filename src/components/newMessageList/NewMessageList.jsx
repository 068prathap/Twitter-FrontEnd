import './NewMessageList.css';

export default function NewMessageList(props)
{
    function handleClick()
    {
        let index
        let result = props.messageAddedList.some(function(user,i) {
            index=i;
            return user.id == props.user.id;
        });
        if(result)
        {
            props.setMessageAddedList(props.messageAddedList.slice(0, index).concat(props.messageAddedList.slice(index + 1)))
        }
        else
        {
            props.setMessageAddedList([...props.messageAddedList, props.user])
        }
    }

    return(
        <div className='newMessageListOuter' onClick={()=>{handleClick();props.messageSearchInput.current.value='';props.setMessageList([]);}}>
            <div className='newMessageList'>
                <div className='newMessageDetails'>
                    <div className='newMessageDetailsImgDiv'>
                        <img className='newMessageDetailsImg' src={props.user.profilepicture_url} />
                    </div>
                    <div className='newMessageDetailsNameDetails'>
                        <div className='newMessageDetailsNameDiv'>
                            <p className='newMessageDetailsName'>{props.user.username}</p>
                        </div>
                        <div className='newMessageDetailsnameOuter'>
                            <div className='newMessageDetailsUsernameDiv'>
                                <p className='newMessageDetailsUsername'>@{props.user.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}