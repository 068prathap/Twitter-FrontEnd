import './FollowSuggestion.css'
import FollowSuggestionList from '../followSuggestionList/FollowSuggestionList'
import { useEffect, useState } from 'react'
import { friendSuggestionList } from '../../utils/FollowSuggestion';

export default function FollowSuggestion()
{
    const [friendList,setFriendList]=useState([]);
    const [apiFinish,setApiFinish]=useState(false);

    useEffect(()=>{
        friendSuggestionList(setFriendList,setApiFinish);
    },[])

    return(
        <div>
            {apiFinish==true ?
                <div className='FollowSuggestionListOuter'>
                    <div className='FollowSuggestionList'>
                        {friendList.map((user,index)=>{
                            return(
                                <FollowSuggestionList user={user}/>
                            )
                        })}
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}