import './MentionsNotification.css'

export default function MentionsNotification()
{
    return(
        <div className='mentionsNotificationOuter'>
            <div className='mentionsNotification'>
                <div className='emptyMentionsOuter'>
                    <div className='emptyMentions'>
                        <p className='emptyMentionsHeading'>Nothing to see here — yet</p>
                        <p className='emptyMentionsNotes'>When someone mentions you, you’ll find it here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}