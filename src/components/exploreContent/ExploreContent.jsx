import './ExploreContent.css';
import ExploreTopNavbar from '../exploreTopNavbar/ExploreTopNavbar';
import ExploreMainContent from '../exploreMainContent/ExploreMainContent';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';

export default observer( function ExploreContent()
{
    store.exploreTab=false;

    return(
        <div>
            <div className='exploreTopNavbarTag'>
                <ExploreTopNavbar/>
            </div>
            <div className='exploreContentTag'>
                <ExploreMainContent/>
            </div>
        </div>
    )
})