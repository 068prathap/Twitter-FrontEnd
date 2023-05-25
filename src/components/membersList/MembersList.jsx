import './MembersList.css';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { ApiCall } from '../../utils/ApiCall';
import { store } from '../../Mobx';
import { twitterCircleRemove } from '../../utils/MembersList';

export default observer(function MembersList(props)
{
    const [present, setPresent] = useState(false)
    console.log(props.page);
    
    return (
        <div className='recommendedFollowerOuter'>
            <div className='recommendedFollower'>
                <div className='recommendedFollowerDetails'>
                    <div className='recommendedFollowerImgDiv'>
                        <img className='recommendedFollowerImg' src={props.user.profilepicture_url} />
                    </div>
                    <div className='recommendedFollowerNameDetails'>
                        <div className='recommendedFollowerNameDiv'>
                            <p className='recommendedFollowerName'>{props.user.username}</p>
                        </div>
                        <div className='recommendedFollowerUsernameOuter'>
                            <div className='recommendedUserFollowerUsernameDiv'>
                                <p className='recommendedFollowerUsername'>@{props.user.name}</p>
                            </div>
                            <div className='followsYouDiv'>
                                <p className='followsYouText'>Follows you</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='AddRecommendedFollowerOuter' onClick={()=>{present || props.page==1 ? ApiCall('deleteHeader',{friendid:props.user.id},'deletetwittercircle'):ApiCall('postHeaderlocal',{friendid:props.user.id},'addtwittercircle');setPresent((val)=>!val);props.page==1 ? twitterCircleRemove(props.index,store) : <></>}}>
                    <div className='AddRecommendedFollower'>
                        <div className={!present && props.page!=1 ? 'RecommendedButton': 'RecommendedButton-1'}>
                            {present || props.page==1 ? <p className='RecommendedButtonText-1'>Remove</p> : <p className='RecommendedButtonText'>Add</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})