import './TwitterCircle.css';
import RecommendedList from '../recommendedList/RecommendedList';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import { useEffect, useState } from 'react';
import { gettingtwitterCircleMembers } from '../../utils/TwitterCircle';

export default observer( function TwitterCircle()
{   
    const [apiResponse,setApiResponse]=useState(0);
    store.currentMembersPage=1

    useEffect(()=>{
        gettingtwitterCircleMembers(store);
        setApiResponse(1)
    },[])

    return(
        <>
            {apiResponse==1 ? 
                <div className='membersDivCirclePageOuter'>
                    <div className='membersDivCirclePage'>
                        <div className='membersDivPageContentNote'>
                            <p className='membersDivPageContentNoteText'>People won’t be notified when you edit your Twitter Circle. Anyone you add will be able to see your previous Twitter Circle Tweets. <a className='membersDivPageContentNoteHelpLink' href='https://help.twitter.com/using-twitter/twitter-circle'>How it works</a></p>
                        </div>
                        {store.twitterCircleMembers.length==0 ? 
                            <div className='membersDivNoCircleOuter'>
                                <div className='membersDivNoCircle'>
                                    <p className='membersDivNoCircleNote'>There isn’t anyone in your Twitter Circle — yet</p>
                                    <p className='membersDivNoCircleAddNote'>When you add people, they’ll show up here.</p>
                                </div>
                            </div>
                            :
                            <RecommendedList array={store.twitterCircleMembers} page={1}/>
                        }
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
 
})