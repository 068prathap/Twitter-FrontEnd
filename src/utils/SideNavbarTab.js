export function activeTab(active,setActive,newTab,activeImg,oldImg,imgRef,imgActive,setActiveImg,setOldImg,img)
{
    active.current.classList.remove('activeP');
    newTab.current.classList.add('activeP');
    activeImg.current.src=oldImg;
    imgRef.current.src=imgActive;
    setActive(newTab);
    setActiveImg(imgRef);
    setOldImg(img);
}

