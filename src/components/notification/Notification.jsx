import './Notification.css';
import NotifyTopNavbar from '../notifyTopNavbar/NotifyTopNavbar';
import { Outlet } from 'react-router-dom';

export default function Notification()
{
    return(
        <div>
            <div className='exploreTopNavbarTag'>
                <NotifyTopNavbar/>
            </div>
            <div className='exploreContentTag'>
                <Outlet/>
            </div>
        </div>
    )
}