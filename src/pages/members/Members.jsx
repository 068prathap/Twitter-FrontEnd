import './Members.css';
import CloseBar from '../../icons/closeBar.svg'
import { useEffect, useRef, useState } from 'react';
import TwitterCircle from '../../components/twitterCircle/TwitterCircle';
import Recommended from '../../components/recommended/Recommended';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import { gettingrecommendedDetails } from '../../utils/Members';
import useOnClickOutside from '../../utils/customHooks/useOnClickOutside';

export default observer(function Members(props) {
    const navigate = useNavigate();
    const membersDivOuter = useRef(null)
    useOnClickOutside(membersDivOuter, () => navigate(props.backLink))
    const [apiResponse,setApiResponse]=useState(0);

    useEffect(()=>{
        gettingrecommendedDetails(store);
        setApiResponse(1);
    },[])

    return (
        <div ref={membersDivOuter} className='membersDivOuter'>
            <div className='membersDiv'>
                <div className='membersDivHeaderOuter'>
                    <div className='membersDivHeader'>
                        <div className='membersDivcloseBarDiv' onClick={() => navigate(props.backLink)}>
                            <img className='membersDivcloseBar' src={CloseBar} />
                        </div>
                        <div className='membersDivHeading'>
                            <p className='membersDivHeadingText'>Edit your Twitter Circle</p>
                        </div>
                    </div>
                </div>
                <div className='membersDivPagesListOuter'>
                    <div className='membersDivPagesList'>
                        <div className='membersDivPage' onClick={() => { navigate('/members');store.currentMembersPage=1}}>
                            <div className='membersDivPageInner'>
                                <p className={props.twitterCircle != true ? 'membersDivPageText' : 'membersDivPageText membersDivPageText-1'}>Twitter Circle</p>
                                <div className={props.twitterCircle == true ? 'membersDivPageLine' : 'membersDivPageLine membersDivPageLine-1'}></div>
                            </div>
                        </div>
                        <div className='membersDivPage' onClick={() => { navigate('/members/suggested');store.currentMembersPage=2}}>
                            <div className='membersDivPageInner'>
                                <p className={props.twitterCircle == true ? 'membersDivPageText' : 'membersDivPageText membersDivPageText-1'}>Recommended</p>
                                <div className={props.twitterCircle != true ? 'membersDivPageLine' : 'membersDivPageLine membersDivPageLine-1'}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='membersDivPageContent'>
                    {props.twitterCircle == true ? <TwitterCircle /> : <Recommended/>}
                </div>
            </div>
        </div>
    )
})