import './RightSideContent.css';
import WhatHappening from '../whatHappening/WhatHappening';
import WhoToFollow from '../whoToFollow/WhoToFollow';
import PolicyFooter from '../policyFooter/PolicyFooter';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';

export default observer( function RightSideContent()
{
    return(
        <div className='rightSideContentDiv'>
            <div className='rightSideContent'>
                {store.exploreTab==true ?
                    <div className='searchbarOuter'>
                        <div className='searchbar'>
                            <svg viewBox="0 0 24 24" aria-hidden="true" class="searchIcon"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                            <input className='inputright' placeholder='Search Twitter' type='text'/>
                        </div>
                    </div>
                    :
                    <></>
                }
                {store.exploreTab==true ? 
                    <div className='whatHappeningTag'>
                        <WhatHappening/>
                    </div>
                    :
                    <></>
                }
                <div className='whoToFollowTag'>
                    <WhoToFollow/>
                </div>
                <div className='policyFooterTag'>
                    <PolicyFooter/>
                </div>
            </div>
        </div>
    )
})