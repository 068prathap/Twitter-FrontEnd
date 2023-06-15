import './Trending.css';
import TrendingList from '../TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import { ForYouTrendingList } from '../../utils/Trending';

export default function Trending(props)
{
    const [array,SetArray]=useState();
    const [apiFinish,setApiFinish]=useState(false);

    useEffect(()=>{
        ForYouTrendingList(SetArray,setApiFinish)
    },[])

    return(
        <>
            {apiFinish==true ?  
                <div className='TrendingListOuter'>
                    <div className='TrendingList'>
                        {array.map((data,index)=>{
                            return(
                                <TrendingList data={data}/>
                            )
                        })}
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}