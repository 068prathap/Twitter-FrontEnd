import './HomeCenterContent.css'
import HomeTopNavBar from '../../components/homeTopNavbar/HomeTopNavbar';
import ContentArea from '../../components/contentArea/ContentArea';

export default function HomeCenterContent()
{
    return (
        <>
            <div className='homeTopNavbarTag'>
                <HomeTopNavBar />
            </div>
            <div className='contentAreaTag'>
                <ContentArea />
            </div>
        </>
    )
}