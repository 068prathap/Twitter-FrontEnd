import './FollowSuggestion.css'
import FollowSuggestionList from '../followSuggestionList/FollowSuggestionList'

export default function FollowSuggestion()
{
    return(
        <div className='FollowSuggestionListOuter'>
            <div className='FollowSuggestionList'>
                <FollowSuggestionList/>
            </div>
        </div>
    )
}