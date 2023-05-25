import './RecommendedList.css';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import MembersList from '../membersList/MembersList';

export default observer( function RecommendedList(props)
{   
    return(
        <div className='recommendedFollowersListOuter'>
            <div className='recommendedFollowersList'>
                {props.array.map((user,index)=>{
                    return(
                        <MembersList user={user} index={index} page={props.page}/>
                    )
                })}
            </div>
        </div>
    )
})