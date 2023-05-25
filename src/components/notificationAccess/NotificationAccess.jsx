import './NotificationAccess.css';
import BellIcon from '../../icons/bellIcon.svg';
import Button from '../button/Button';
import { useState } from 'react';
import { notificationAccessTrue } from '../../utils/NotificationAccess';
import { notificationAccessFalse } from '../../utils/NotificationAccess';
import { useNavigate } from 'react-router-dom';

export default function NotificationAccess()
{
    const navigate=useNavigate();

    return(
        <div className="su notificationPermition">
            <div className='contentOfNotificationAccess'>
                <div className="bellIcon">
                    <img src={BellIcon}/>
                </div>
                <div className='textContectOfNotificationAccess'>
                    <p className='titleOfNotificationAccess'>Turn on notifications</p>
                    <p className='noteForNotificationAccess'>Get the most out of Twitter by staying up to date with what's happening.</p>
                </div>
                <div className='notificationAccessButtons'>
                    <div className='allowNotificationAccess'>
                        <Button onClick={()=>{notificationAccessTrue(); navigate('/')}} text={'Allow notifications'} class={'Next-1'} activation={true}/>
                    </div>
                    <div className='skipNotificationAccess'>
                        <Button onClick={()=>{notificationAccessFalse(); navigate('/')}} onclick text={'Skip for now'} class={'skipProfile'} activation={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}