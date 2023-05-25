import './TrendingList.css';
import { threeDot } from '../../utils/icongenerator';
import { useRef, useState } from 'react';
import { sadEmoji } from '../../utils/icongenerator';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';
import useOnClickOutside from '../../utils/customHooks/useOnClickOutside';

export default observer( function TrendingList(props)
{
    const [threeDotColor,setThreeDotColor]=useState('rgb(83, 100, 113)');
    const [dialogBox,setDialogBox]=useState(false)
    const trendingOpinionDialogBoxOuter=useRef();

    useOnClickOutside(trendingOpinionDialogBoxOuter, ()=>{store.bodyCoveringDiv=false;setDialogBox(false)})

    return(
        <div className='TrendingContentOuterDiv'>
            <div className='TrendingContentOuter'>
                <div className='trendingContent'>
                    <div className='trendingContentDiv'>
                        <div className='trendingContentDetails'>
                            <div className='trendingContentHeadingDiv'>
                                <p className='trendingContentHeading'>Sports - Trending</p>
                            </div>
                            <div className='trendingContentNameDiv'>
                                <p className='trendingContentName'>#IPLPlayOffs</p>
                            </div>
                            <div className='trendingContentCountDiv'>
                                <p className='trendingContentCount'>3,940 Tweets</p>
                            </div>
                        </div>
                        <div className='trendingContentEditOption'>
                            <div className='trendingContentEditOptionIconDiv' onMouseOver={()=>{setThreeDotColor('rgb(29, 155, 240)')}} onMouseOut={()=>{setThreeDotColor('rgb(83, 100, 113)')}} onClick={()=>{store.bodyCoveringDiv=true;setDialogBox(true)}}>
                                <div className='trendingContentEditOptionIcon'>{threeDot(`${threeDotColor}`,'17.5px','17.5px')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {dialogBox==true ?
                <div ref={trendingOpinionDialogBoxOuter}  className={props.className}>
                    <div className='trendingOpinionDialogBox'>
                        <div className='opinion1' onClick={()=>{store.bodyCoveringDiv=false;setDialogBox(false)}}>
                            <div className='sadEmoji'>{sadEmoji('rgb(15, 20, 25)','18px','17px')}</div>
                            <p className='opinionText'>Not interested in this</p>
                        </div>
                        <div className='opinion2' onClick={()=>{store.bodyCoveringDiv=false;setDialogBox(false)}}>
                            <div className='sadEmoji'>{sadEmoji('rgb(15, 20, 25)','18px','17px')}</div>
                            <p className='opinionText'>This trend is harmful or spammy</p>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
})