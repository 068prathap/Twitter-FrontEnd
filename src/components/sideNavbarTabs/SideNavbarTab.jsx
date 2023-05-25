import './SideNavbarTab.css';
import { activeTab } from '../../utils/SideNavbarTab';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { store } from '../../Mobx';

export default observer( function SideNavbarTab(props)
{
    const navigate=useNavigate();

    useEffect(()=>{
        props.pText=='Home'?activeTab(props.active,props.setActive,props.pRef,props.activeImg,props.oldImg,props.imgRef,props.imgActive,props.setActiveImg,props.setOldImg,props.img):<></>;
    },[])

    return(
        <div className={props.class} onClick={()=>{
                props.pText!='More'?activeTab(props.active,props.setActive,props.pRef,props.activeImg,props.oldImg,props.imgRef,props.imgActive,props.setActiveImg,props.setOldImg,props.img):<></>;
                navigate(props.navigate);
                store.exploreTab=props.exploreTab;
                props.twitterBlue==true ? store.twitterBlue=true : <></>;
            }}>
            <img ref={props.imgRef} className={props.imgClass} src={props.img}/>
            <p ref={props.pRef} className={props.pClass}>{props.pText}</p>
        </div>
    )
})