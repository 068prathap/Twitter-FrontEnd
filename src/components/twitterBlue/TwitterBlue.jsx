import './TwitterBlue.css'
import { closeIcon } from '../../utils/icongenerator';
import { twitterBlue } from '../../utils/icongenerator';
import { useRef, useState } from 'react';
import { tick } from '../../utils/icongenerator';
import { downArrow } from '../../utils/icongenerator';
import { tweetFeather } from '../../utils/icongenerator';
import { editPen } from '../../utils/icongenerator';
import { profileSetting } from '../../utils/icongenerator';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import useOnClickOutside from '../../utils/customHooks/useOnClickOutside';

export default observer( function TwitterBlue()
{
    const [currentPayMode,setCurrentPayMode]=useState(1);
    const [extraFeatures,setExtraFeatures]=useState(false);
    const twitterBlueOuter=useRef();

    useOnClickOutside(twitterBlueOuter, ()=>{store.twitterBlue=false})

    return(
        <div ref={twitterBlueOuter} className='twitterBlueOuter'>
            <div className='twitterBlue'>
                <div className='twitterBlueHeaderOuter'>
                    <div className='twitterBlueHeader'>
                        <div className='twitterBlueCloseIcon' onClick={()=>{store.twitterBlue=false}}>{closeIcon('rgb(15, 20, 25)','19px','19px')}</div>
                        <div className='twitterBlueText'>{twitterBlue('rgb(15, 20, 25)','76.0px','31.25px')}</div>
                    </div>
                </div>
                <div className='twitterBlueContentOuter'>
                    <div className='twitterBlueContent'>
                        <div className='twitterBlueBannerOuter'>
                            <div className='twitterBlueBanner'>
                                <div className='blueTickNoteDiv'>
                                    <p className='blueTickNote'>Blue subscribers with a verified phone number will get a blue checkmark once approved.</p>
                                </div>
                                <div className='blueTickImgDiv'>
                                    <img className='blueTickImg' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"/>
                                </div>
                            </div>
                        </div>
                        <div className='payOptionOuter'>
                            <div className='payOption'>
                                <div className='annualPayOuter'>
                                    <div className={currentPayMode==1 ? 'annualPay annualPay-1' : 'annualPay'} onClick={()=>{setCurrentPayMode(1)}}>
                                        <div className='annuallyTextDiv'>
                                            <p className='annuallyText'>Annually</p>
                                        </div>
                                        <div className='saveMoneyDiv'>
                                            <p className='saveMoneyText'>SAVE 12%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={currentPayMode==2 ? 'monthlyPayOuter monthlyPayOuter-1' : 'monthlyPayOuter'} onClick={()=>{setCurrentPayMode(2)}}>
                                    <div className='monthlyPay'>
                                        <p className='monthlyPayText'>Monthly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blueContentOuter'>
                            <div className='blueContent'>
                                <div className='blueContentHeadingOuter'>
                                    <div className='blueContentHeading'>
                                        <p className='blueText'>Blue</p>
                                        <div className='blueContentTickIconDiv'>
                                            <div className='blueContentTickIcon'>{tick('rgb(255, 255, 255)','15px','15px')}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='blueTickFeaturesOuter'>
                                    <div className='blueTickFeatures'>
                                        <ul className='blueTickFeaturesList'>
                                            <li className='blueTickFeatureItem'>Prioritized rankings in conversations and search</li>
                                            <li className='blueTickFeatureItem'>See approximately twice as many Tweets between ads in your For You and Following timelines.</li>
                                            <li className='blueTickFeatureItem'>Add bold and italic text in your Tweets</li>
                                            <li className='blueTickFeatureItem'>Post longer videos and 1080p video uploads</li>
                                            <li className='blueTickFeatureItem'>All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={extraFeatures==false ? 'learnMoreFeaturesOuter' : 'learnMoreFeaturesOuter learnMoreFeaturesOuter-1'} onClick={()=>{extraFeatures==true ? setExtraFeatures(false) : setExtraFeatures(true)}}>
                                    <div className={extraFeatures==false ? 'learnMoreFeatures' : 'learnMoreFeatures learnMoreFeatures-1'}>
                                        <p className='learnMoreFeaturesText'>Learn more</p>
                                        {extraFeatures==false ? <div className='learnMoreFeaturesDownArrow'>{downArrow('rgb(15, 20, 25)','18.75px','18.75px')}</div> : <></>}
                                        {extraFeatures==true ? <div className='learnMoreFeaturesUpArrow'>{downArrow('rgb(29, 155, 240)','18.75px','18.5px')}</div> : <></>}
                                    </div>
                                </div>
                                {extraFeatures==true ?
                                    <div className='blueTickExtraFeaturesListOuter'>
                                        <div className='blueTickExtraFeaturesList'>
                                            <div className='blueTickExtraFeatureOuter'>
                                                <div className='blueTickExtraFeature'>
                                                    <div className='blueTickExtraFeatureIcon'>{tweetFeather('rgb(15, 20, 25)','18.75px','18.75px')}</div>
                                                    <div className='blueTickExtraFeatureDetails'>
                                                        <p className='blueTickExtraFeatureHeading'>Longer Tweets</p>
                                                        <p className='blueTickExtraFeatureNote'>Create Tweets, replies and Quotes up to 10,000 characters long.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='blueTickExtraFeatureOuter'>
                                                <div className='blueTickExtraFeature'>
                                                    <div className='blueTickExtraFeatureIcon'>{editPen('rgb(15, 20, 25)','18.75px','18.75px')}</div>
                                                    <div className='blueTickExtraFeatureDetails'>
                                                        <p className='blueTickExtraFeatureHeading'>Edit Tweet</p>
                                                        <p className='blueTickExtraFeatureNote'>Edit a Tweet up to 5 times within 30 minutes.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='blueTickExtraFeatureOuter'>
                                                <div className='blueTickExtraFeature'>
                                                    <div className='blueTickExtraFeatureIcon'>{profileSetting('rgb(15, 20, 25)','18.75px','18.75px')}</div>
                                                    <div className='blueTickExtraFeatureDetails'>
                                                        <p className='blueTickExtraFeatureHeading'>NFT Profile Pictures</p>
                                                        <p className='blueTickExtraFeatureNote'>Show your personal flair and set your profile picture to an NFT you own.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='twitterBlueFooterOuter'>
                    <div className='twitterBlueFooter'>
                        <div className='payButtonOuter'>
                            <div className='payButton'>
                                {currentPayMode==1 ?
                                    <p className='payAmount'><span className='previousAmount'>₹7,800.00</span> ₹6,800.00 / year</p>
                                    :
                                    <p className='payAmount'>₹650.00 / month</p>
                                }
                            </div>
                        </div>
                        <div className='twitterBluePolicyDiv'>
                            <p className='twitterBluePolicy'>By subscribing, you agree to our <a className='twitterBluePolicyLink'>Purchaser Terms of Service</a>. Subscriptions auto-renew until canceled, as described in the Terms. Cancel anytime. A verified phone number is required to subscribe. If you've subscribed on another platform, manage your subscription through that platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})