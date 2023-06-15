import './MessagesChat.css'

export default function MessagesChat()
{
    return(
        <div className='messagesChatOuter'>
            <div className='messagesChat'>
                <div className='emptyChatOuter'>
                    <div className='emptyChatNoteOuter'>
                        <div className='emptyChatNote'>
                            <div className='emptyChatHeadingDiv'>
                                <p className='emptyChatHeading'>Select a message</p>
                            </div>
                            <div className='chatNoteDiv'>
                                <p className='chatNote'>Choose from your existing conversations, start a new one, or just keep swimming.</p>
                            </div>
                            <div className='newChatButtonOuter'>
                                <div className='newChatButton'>
                                    <p className='newChatButtonText'>New message</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}