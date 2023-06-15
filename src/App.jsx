import React, { useEffect } from 'react';
import { Routes, Route, useNavigate ,Switch} from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import UserPage from './pages/userPage/UserPage';
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
import Trending from './components/trending/Trending';
import MessagesInbox from './components/messagesInbox/MessagesInbox';
import MessagesChat from './components/messagesChat/MessagesChat';
// import { Provider } from 'react-redux';
// import ReduxSample from './components/reduxSample/reduxSample';
// import { reduxStore } from './utils/redux/reduxStore';

export default observer( function App()
{   

    useEffect(()=>{
        profileApicall(store);
    },[])
    store.profilePageUrl=localStorage.getItem('profileURL')

    return(
        <Routes>
            {/* <Switch> */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/signup' element={<LandingPage signup={true} />} />
            <Route path='/login' element={<LandingPage login={true} />} />
            <Route path='/password_reset' element={<ForgotPassword />} />
            <Route path='/' element={<UserPage />}>
                <Route path='home' element={<HomeCenterContent/>} />
                <Route path='explore' element={<ExploreContent/>} >
                    <Route path='for-you' element={<ScoreTable/>} />
                    <Route path='trending' element={<div><p className='indiaTrends'>India trends</p><div className='exploreTrendingTag'><Trending/></div></div>}/>
                    <Route path='news' element={<div className='exploreTrendingTag'><Trending/></div>}/>
                    <Route path='sports' element={<ScoreTable/>}/>
                    <Route path='entertainment' element={<div className='exploreTrendingTag'><Trending/></div>}/>
                </Route>
                <Route path='notification' element={<Notification/>}>
                    <Route path='' element={<AllNotifyContent/>}/>
                    <Route path='verified' element={<VerifiedNotification/>}/>
                    <Route path='mentions' element={<MentionsNotification/>}/>
                </Route>
                <Route path={store.profilePageUrl} element={<ProfilePage/>}>
                    <Route path='replies' element={<></>}/>
                    <Route path='media' element={<></>}/>
                    <Route path='likes' element={<></>}/>
                </Route>
            </Route>
            <Route path='messages' element={<UserPage newLayout={true} leftComponent={MessagesInbox} rightComponent={MessagesChat}/>}/>
            <Route path='members' element={<UserPage members={true} twitterCircle={true}/>}/>
            <Route path='members/suggested' element={<UserPage members={true}/>}/>
            {/* </Switch> */}
        </Routes>
        // <Provider store={reduxStore}>
        //     <div>
        //         <ReduxSample/>
        //     </div>
        // </Provider>
    )
})