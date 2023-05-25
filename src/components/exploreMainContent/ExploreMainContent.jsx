import './ExploreMainContent.css';
import { Outlet } from 'react-router-dom';
import Trending from '../trending/Trending';

export default function ExploreMainContent()
{
    return(
        <div className='exploreContentOuter'>
            <div className='exploreContent'>
                <div className='exploreTopContent'>
                    <Outlet/>
                </div>
                <div className='exploreTrendingTag'>
                    <Trending className={'trendingOpinionDialogBoxOuter lowZ-index'}/>
                </div>
            </div>
        </div>
    )
}