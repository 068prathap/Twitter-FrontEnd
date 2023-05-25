import './VerifiedNotification.css'

export default function VerifiedNotification()
{
    return(
        <div className='verifiedNotificationOuter'>
            <div className='verifiedNotification'>
                <div className='verifiedEmptyConteinerOuter'>
                    <div className='verifiedEmptyConteiner'>
                        <div className='verifiedEmptyConteinerImgDiv'>
                            <img className='verifiedEmptyConteinerImg' src="https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png"/>
                        </div>
                        <div className='verifiedEmptyConteinerNote'>
                            <p className='verifiedEmptyConteinerHeading'>Nothing to see here — yet</p>
                            <p className='verifiedEmptyConteinerText'>Likes, mentions, Retweets, and a whole lot more — when it comes from a verified account, you’ll find it here. <a className='learnMore'>Learn more</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}