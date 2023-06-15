import './MessageInboxNavbar.css'

export default function MessageInboxNavbar()
{
    return(
        <div className='messageInboxNavbarOuter'>
            <div className='messageInboxNavbar'>
                <div className='messageInboxnavBarTabOuter'>
                    <div className=''>
                        <div className='messageInboxnavBarTabDiv'>
                            <p className='messageInboxnavBarTab'>All</p>
                        </div>
                        <div className='massageInboxNavbarActiveTab'>
                            <div className='massageInboxNavbarActiveTabLine'></div>
                        </div>
                    </div>
                </div>
                <div className='messageInboxnavBarTabOuter'>
                    <div className='messageInboxnavBarTabDiv'>
                        <p className='messageInboxnavBarTab'>People</p>
                    </div>
                    <div className='massageInboxNavbarActiveTab'>
                        <div className='massageInboxNavbarActiveTabLine'></div>
                    </div>
                </div>
                <div className='messageInboxnavBarTabOuter'>
                    <div className='messageInboxnavBarTabDiv'>
                        <p className='messageInboxnavBarTab'>Groups</p>
                    </div>
                    <div className='massageInboxNavbarActiveTab'>
                        <div className='massageInboxNavbarActiveTabLine'></div>
                    </div>
                </div>
                <div className='messageInboxnavBarTabOuter'>
                    <div className='messageInboxnavBarTabDiv'>
                        <p className='messageInboxnavBarTab'>Messages</p>
                    </div>
                    <div className='massageInboxNavbarActiveTab'>
                        <div className='massageInboxNavbarActiveTabLine'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}