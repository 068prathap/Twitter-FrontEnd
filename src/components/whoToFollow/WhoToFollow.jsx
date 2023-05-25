import './WhoToFollow.css'
import FollowSuggestion from '../followSuggestion/FollowSuggestion'

export default function WhoToFollow()
{
    return(
        <div className='whatHappeningOuter'>
            <div className='WhatHappening'>
                <div className='WhatHappeningHeadingDiv'>
                    <p className='WhatHappeningHeading'>Who to follow</p>
                </div>
                <div className='followSuggestionTag'>
                    <FollowSuggestion/>
                </div>
                <div className='showMoreOuter'>
                    <div className='showMoreDiv'>
                        <p className='ShowMoreText'>Show more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}