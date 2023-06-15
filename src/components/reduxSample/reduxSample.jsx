import { useSelector } from "react-redux";
import { reduxStore } from "../../utils/redux/reduxStore";

export default function ReduxSample()
{
    const state = useSelector(() => reduxStore.getState());
    return(
        <div>
            <p>number of count</p>
            <button onClick={()=>{reduxStore.dispatch({type:'change',value:[state.count+1,state.count1+1],property:['count','count1']})}}>click</button>
            <p>{state.count}</p>
        </div>
    )
}