export function activeTab(active,setActive,newTab)
{
    newTab.current.classList.add('activeP');
    active.current.classList.remove('activeP');
    setActive(newTab);
}