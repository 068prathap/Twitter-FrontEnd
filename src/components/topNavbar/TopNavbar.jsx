import './TopNavbar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopNavbar(props)
{
    const navigate=useNavigate();

    return (
        <div className='topNavTopicDivOuter' onClick={() => { props.setCurrentNavTab(props.index); navigate(props.navigate)}}>
            <div className='topNavTopicDiv'>
                <div className='topNavTopicTextDiv'>
                    <p className={props.currentNavTab == props.index ? 'topNavTopic topNavTopicActive' : 'topNavTopic'}>{props.tab}</p>
                </div>
                <div className={props.currentNavTab == props.index ? 'activeNavline' : ''}></div>
            </div>
        </div>
    )
}