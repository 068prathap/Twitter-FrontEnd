import './ExploreTopNavbar.css'
import { settingIcon } from '../../utils/icongenerator'
import { searchIcon } from '../../utils/icongenerator'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { bibSearchIcon } from '../../utils/icongenerator'
import { closeIcon } from '../../utils/icongenerator'
import HistoryList from '../historyList/HistoryList'
import { observer } from 'mobx-react';
import { store } from '../../Mobx'

export default observer( function ExploreTopNavbar()
{
    const [searchIconIconColor, setSearchIconColor] = useState('rgb(83, 100, 113)')
    const [onFocus, setOnFocus] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [currentNavTab, setCurrentNavTab] = useState(1);
    const navigate = useNavigate();
    const exploreTopInputBox=useRef()

    return (
        <div className='exploreTopNavbarOuter'>
            <div className='exploreTopNavbar'>
                <div className='exploreTopSearchbarOuter'>
                    <div className='exploreTopSearchbar'>
                        <div className='exploreTopUserImgDiv'>
                            <img className='exploreTopUserImg' src="" />
                        </div>
                        <div className='exploreTopInputBoxOuter' tabindex="0" onFocus={(event) => { setSearchIconColor('rgb(29, 155, 240)'); setOnFocus(true) }} onBlur={() => { setSearchIconColor('rgb(83, 100, 113)'); setOnFocus(false) }}>
                            <div className={onFocus == false ? 'exploreTopInputBoxDiv' : 'exploreTopInputBoxDiv exploreTopInputBoxDiv-1'}>
                                <div className='exploreTopSearchIcon'>{searchIcon(`${searchIconIconColor}`, '41px', '17.5px')}</div>
                                <input ref={exploreTopInputBox} id='abc' className='exploreTopInputBox' value={inputValue} type="text" placeholder='Search Twitter' 
                                    onKeyDown={(event)=>{
                                        if(event.keyCode==13)
                                        {
                                            store.searchHistory.push(event.target.value);
                                            localStorage.setItem('exploreSearch',JSON.stringify(store.searchHistory));
                                            setOnFocus(false)
                                        }}}
                                    onChange={(event) => { setInputValue(event.target.value)}}    
                                />
                                {inputValue.length!=0 ?
                                    <div className='exploreTopInputClose' onClick={()=>{setInputValue('')}}>
                                        <div className='exploreTopInputCloseIcon'>{closeIcon('white','16px','16px')}</div>
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                            {onFocus == true ?
                                <div className='searchHistoryPopupOuter'>
                                    <div className='searchHistoryPopup'>
                                        {store.searchHistory.length == 0 ?
                                            <div className='searchNoteDiv'>
                                                <p className='searchNote'>Try searching for people, topics, or keywords</p>
                                            </div>
                                            :
                                            <div>
                                                <div className='searchHistoryHeadingOuter'>
                                                    <div className='searchHistoryHeading'>
                                                        <p className='recentTag'>Recent</p>
                                                        <p className='clearAllTag' onClick={()=>{localStorage.setItem('exploreSearch',JSON.stringify([]));store.searchHistory=[]}}>Clear all</p>
                                                    </div>
                                                </div>
                                                {store.searchHistory.map((data,index) => {
                                                    return (
                                                        <HistoryList  data={data} index={index}/>
                                                    )
                                                })}
                                            </div>
                                        }
                                    </div>
                                </div>
                                :
                                <></>
                            }
                        </div>
                        <div className='exploreTopSettingIconDiv'>
                            <div className='exploreTopSettingIcon'>{settingIcon('rgb(15, 20, 25)', '19px', '19px')}</div>
                        </div>
                    </div>
                </div>
                <div className='exploreTopNavListOuter'>
                    <div className='exploreTopNavList'>
                        <div className='exploreTopNavTopicDivOuter' onClick={() => { setCurrentNavTab(1); navigate('/explore/for-you') }}>
                            <div className='exploreTopNavTopicDiv'>
                                <p className={currentNavTab == 1 ? 'exploreTopNavTopic exploreTopNavTopicActive forYouNavInExplore' : 'exploreTopNavTopic forYouNavInExplore'}>For you</p>
                                <div className={currentNavTab == 1 ? 'activeNavline' : ''}></div>
                            </div>
                        </div>
                        <div className='exploreTopNavTopicDivOuter' onClick={() => { setCurrentNavTab(2); navigate('/explore/trending') }}>
                            <div className='exploreTopNavTopicDiv'>
                                <p className={currentNavTab == 2 ? 'exploreTopNavTopic exploreTopNavTopicActive' : 'exploreTopNavTopic'}>Trending</p>
                                <div className={currentNavTab == 2 ? 'activeNavline' : ''}></div>
                            </div>
                        </div>
                        <div className='exploreTopNavTopicDivOuter' onClick={() => { setCurrentNavTab(3); navigate('/explore/news') }}>
                            <div className='exploreTopNavTopicDiv'>
                                <p className={currentNavTab == 3 ? 'exploreTopNavTopic exploreTopNavTopicActive' : 'exploreTopNavTopic'}>News</p>
                                <div className={currentNavTab == 3 ? 'activeNavline' : ''}></div>
                            </div>
                        </div>
                        <div className='exploreTopNavTopicDivOuter' onClick={() => { setCurrentNavTab(4); navigate('/explore/sports') }}>
                            <div className='exploreTopNavTopicDiv'>
                                <p className={currentNavTab == 4 ? 'exploreTopNavTopic exploreTopNavTopicActive' : 'exploreTopNavTopic'}>Sports</p>
                                <div className={currentNavTab == 4 ? 'activeNavline' : ''}></div>
                            </div>
                        </div>
                        <div className='exploreTopNavTopicDivOuter' onClick={() => { setCurrentNavTab(5); navigate('/explore/entertainment') }}>
                            <div className='exploreTopNavTopicDiv'>
                                <p className={currentNavTab == 5 ? 'exploreTopNavTopic exploreTopNavTopicActive' : 'exploreTopNavTopic'}>Entertainment</p>
                                <div className={currentNavTab == 5 ? 'activeNavline' : ''}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})