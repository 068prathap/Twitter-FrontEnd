import './HomeTopNavbar.css';
import { useRef } from 'react';
import { NavChange } from '../../utils/HomeTopNavBar';
import twitterLogo from '../../icons/twitterLogo.svg'

export default function HomeTopNavBar()
{
    const foryouNav=useRef();
    const foryouNavLine=useRef();
    const followingNav=useRef();
    const followingNavLine=useRef();

    return(
        <div className='homeTopNavbar'>
            <div className='profileAndLogoHeadingOuter'>
                <div className='profileAndLogoHeading'>
                    <div className='profileImgHeadingDiv'>
                        <img className='profileImgHeading' src={''}/>
                    </div>
                    <div className='logoHeadingDiv'>
                        <img className='logoHeading' src={twitterLogo}/>
                    </div>
                </div>
            </div>
            <div className='homeTitle'>
                <p className='homeTitleName'>Home</p>
            </div>
            <div className='homeNavList'>
                <div className='foryouNavDiv' onClick={()=>NavChange(foryouNav,foryouNavLine,followingNav,followingNavLine)}>
                    <div className='foryouNavText'>
                        <p ref={foryouNav} className='foryouNav Nav-1'>For you</p>
                    </div>
                    <div ref={foryouNavLine} className='foryouNavLine'></div>
                </div>
                <div className='followingNavDiv' onClick={()=>NavChange(followingNav,followingNavLine,foryouNav,foryouNavLine)}>
                    <div className='followingNavText'>
                        <p ref={followingNav} className='followingNav'>Following</p>
                    </div>
                    <div ref={followingNavLine} className='followingNavLine NavLine-1'></div>
                </div>
            </div>
        </div>
    )
}