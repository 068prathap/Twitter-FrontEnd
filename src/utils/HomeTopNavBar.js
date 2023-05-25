export function NavChange(activeNav,activeNavLine,inactiveNav,inactiveNavLine)
{
    activeNav.current.classList.add('Nav-1');
    activeNavLine.current.classList.remove('NavLine-1');
    inactiveNav.current.classList.remove('Nav-1');
    inactiveNavLine.current.classList.add('NavLine-1');
}