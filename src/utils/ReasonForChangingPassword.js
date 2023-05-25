import { ApiCall } from "./ApiCall"; 

export function radioButtonClick(activeOuter,activeInner,deactiveOuter1,deactiveInner1,deactiveOuter2,deactiveInner2,setActivation,setButtonChange,reason,setReason)
{
    activeOuter.current.classList.add('radioButtonOuter-1');
    activeInner.current.classList.add('radioButton-1');
    deactiveOuter1.current.classList.remove('radioButtonOuter-1');
    deactiveInner1.current.classList.remove('radioButton-1');
    deactiveOuter2.current.classList.remove('radioButtonOuter-1');
    deactiveInner2.current.classList.remove('radioButton-1');
    setActivation(true);
    setButtonChange(true);
    setReason(reason.current.innerText);
}
export function navigationForward(reason,userAccount,userType)
{
    let data={
        [userType]:userAccount,
        'opinion':reason
    }
    ApiCall('post',data,'passwordresetopinion');
}