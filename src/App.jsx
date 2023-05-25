import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Home from './pages/home/Home';
import HomeCenterContent from './components/homeCenterContent/HomeCenterContent';
import ExploreContent from './components/exploreContent/ExploreContent';
import ScoreTable from './components/scoreTable/ScoreTable';
import Notification from './components/notification/Notification';
import AllNotifyContent from './components/allnotifyContent/AllNotifyContent';
import VerifiedNotification from './components/verifiedNotification/VerifiedNotification';
import MentionsNotification from './components/mentionsNotification/MentionsNotification';
import { observer } from 'mobx-react';
import { store } from './Mobx';
import ProfilePage from './components/profilePage/ProfilePage';
import { profileApicall } from './utils/Home';

export default observer( function App()
{   

    useEffect(()=>{
        profileApicall(store);
    },[])

    return(
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/signup' element={<LandingPage signup={true} />} />
            <Route path='/login' element={<LandingPage login={true} />} />
            <Route path='/password_reset' element={<ForgotPassword />} />
            <Route path='/' element={<Home />}>
                <Route path='home' element={<HomeCenterContent isModal={false}/>} />
                <Route path='explore' element={<ExploreContent/>} >
                    <Route path='for-you' element={<ScoreTable/>}/>
                    <Route path='trending' element={<p className='indiaTrends'>India trends</p>}/>
                    <Route path='news' element={<></>}/>
                    <Route path='sports' element={<ScoreTable/>}/>
                    <Route path='entertainment' element={<></>}/>
                </Route>
                <Route path='notification' element={<Notification/>}>
                    <Route path='' element={<AllNotifyContent/>}/>
                    <Route path='verified' element={<VerifiedNotification/>}/>
                    <Route path='mentions' element={<MentionsNotification/>}/>
                </Route>
                <Route path={store.profilePageUrl} element={<ProfilePage/>}>
                    <Route path='' element={<></>}/>
                    <Route path='replies' element={<></>}/>
                    <Route path='media' element={<></>}/>
                    <Route path='likes' element={<></>}/>
                </Route>
            </Route>
            <Route path='members' element={<Home members={true} twitterCircle={true}/>}/>
            <Route path='members/suggested' element={<Home members={true}/>}/>
            <Route path='explore' element={<Home/>}/>
        </Routes>
    )
})