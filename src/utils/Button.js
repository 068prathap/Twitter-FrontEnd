export function navigateBackward(priorLink,liveLink)
{
    priorLink.current.style.display='block';
    liveLink.current.style.display='none';
}