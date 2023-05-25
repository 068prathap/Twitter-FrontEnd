import './NotifyTopNavbar.css'
import { settingIcon } from '../../utils/icongenerator';    
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../topNavbar/TopNavbar';

export default function NotifyTopNavbar()
{
    const[currentNavTab,setCurrentNavTab]=useState(0);
    const navigate=useNavigate();
    let navList=['All','Verified','Mentions'];
    let navListNavigation=['','/notification/verified','/notification/mentions']

    return (
        <div className='notifyTopNavbarOuter'>
            <div className='notifyTopNavbar'>
                <div className='notifyTopSearchbarOuter'>
                    <div className='notifyTopSearchbar'>
                        <div className='notifyTopUserImgDiv'>
                            <img className='notifyTopUserImg' src="" />
                        </div>
                        <div className='notifyTopHeadingDiv'>
                            <p className='notifyTopHeading'>Notifications</p>
                        </div>
                        <div className='notifyTopSettingIconDiv'>
                            <div className='notifyTopSettingIcon'>{settingIcon('rgb(15, 20, 25)', '19px', '19px')}</div>
                        </div>
                    </div>
                </div>
                <div className='TopNavListOuter'>
                    <div className='TopNavList'>
                        {navList.map((tab,index)=>{
                            return(
                                <TopNavbar tab={tab} index={index} currentNavTab={currentNavTab} setCurrentNavTab={setCurrentNavTab} navigate={navListNavigation[index]}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}