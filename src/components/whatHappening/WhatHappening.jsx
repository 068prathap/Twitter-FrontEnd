import './WhatHappening.css';
import Trending from '../trending/Trending';
import { useNavigate } from 'react-router-dom';

export default function WhatHappening()
{
    const navigate=useNavigate();

    return(
        <div className='whatHappeningOuter'>
            <div className='WhatHappening'>
                <div className='WhatHappeningHeadingDiv'>
                    <p className='WhatHappeningHeading'>What's happening</p>
                </div>
                <div className='topContentOuter'>
                    <div className='topContent'>
                        <div className='topContentDetails'>
                            <div className='topContentHeadingDiv'>
                                <p className='topContentHeadingPart1'>NBA</p>
                                <div className='centerPointOuter'>
                                    <div className='centerPoint'>.</div>
                                </div>
                                <p className='topContentHeadingPart2'>This morning</p>
                            </div>
                            <div className='topContentNoteDiv'>
                                <p className='topContentNote'>Hawks at Heat</p>
                            </div>
                        </div>
                        <div>
                            <div className='topContentImgDiv'>
                                <img className='topContentImg' src="https://pbs.twimg.com/semantic_core_img/1338976518827958272/hpwOBe8G?format=jpg&name=240x240"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='trendingTag'>
                    <Trending/>
                </div>
                <div className='showMoreOuter' onClick={()=>{navigate('/explore/for-you')}}>
                    <div className='showMoreDiv'>
                        <p className='ShowMoreText'>Show more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}