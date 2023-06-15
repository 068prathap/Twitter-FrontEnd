import './ExploreMainContent.css';
import { Outlet } from 'react-router-dom';

export default function ExploreMainContent()
{
    return(
        <div className='exploreContentOuter'>
            <div className='exploreContent'>
                <div className='exploreTopContent'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}