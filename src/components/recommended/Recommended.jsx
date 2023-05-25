import './Recommended.css'
import { searchIcon } from '../../utils/icongenerator';
import { useState } from 'react';
import RecommendedList from '../recommendedList/RecommendedList';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import { useEffect } from 'react';
import { gettingrecommendedDetails } from '../../utils/Members';

export default observer( function Recommended()
{
    const [inputActive,setInputActive]=useState(false)
    store.currentMembersPage=2;
    const [apiResponse,setApiResponse]=useState(0);

    useEffect(()=>{
        gettingrecommendedDetails(store);
        setApiResponse(1)
    },[])

    return(
        <div className='MembersDivRecommendedPageOuter'>
            <div className='MembersDivRecommendedPage'>
                <div className='recommendedSearchTabOuter' onClick={()=>setInputActive(true)}>
                    <div className={inputActive==false ? 'recommendedSearchTab' : 'recommendedSearchTab recommendedSearchTab-1'}>
                        <div className={inputActive==false ? 'recommendedSearchLabel' : 'recommendedSearchLabel recommendedSearchLabel-1'}>
                            <div className='recommendedSearchIcon'>{searchIcon('rgb(83, 100, 113)', "15px", "15px")}</div>
                            <p className={inputActive==false ? 'recommendedSearchText' : 'recommendedSearchText-1'}>Search people</p>
                        </div>
                        <input className={inputActive==false ? 'recommendedSearchInput' : 'recommendedSearchInput recommendedSearchInput-1'} type="text" placeholder={inputActive==true ? 'Search people' : ''} onBlur={()=>setInputActive(false)}/>
                    </div>
                </div>
                <div className='membersDivPageContentNote recommendedPageNote'>
                    <p className='membersDivPageContentNoteText'>People won’t be notified when you edit your Twitter Circle. Anyone you add will be able to see your previous Twitter Circle Tweets. <a className='membersDivPageContentNoteHelpLink' href='https://help.twitter.com/using-twitter/twitter-circle'>How it works</a></p>
                </div>
                {store.recommendedDetails.length==0 ? 
                    <div className='membersDivNoCircleOuter'>
                        <div className='membersDivNoCircle'>
                            <p className='membersDivNoCircleNote'>You don’t have any recommendations — yet</p>
                            <p className='membersDivNoCircleAddNote'>We’ll suggest people to add to your Twitter Circle here.</p>
                        </div>
                    </div>
                    :
                    <RecommendedList array={store.recommendedDetails} page={2}/>
                }
            </div>
        </div>
    )
})