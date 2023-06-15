import './Selection.css';
import { useRef } from 'react';
import {Setvalue} from '../../utils/Selection';

export default function Dob(props)
{
    const selection=useRef();
    let arr = props.arr;

    return (
        <div className={props.class}>
            <label>{props.class}</label>
            <select ref={selection} defaultValue={props.editProfile==true ? props.defaultIndex : 0} onChange={()=>Setvalue(props.setvalue,selection)}>
                {arr.map((data,index) => 
                {
                    if(index==0)
                    {
                        return (<option value={0} disabled={props.editProfile==true ? false : true}>{data}</option>)
                    }
                    else
                    {
                        return (<option value={data}>{data}</option>)
                    }
                }
                )}
            </select>
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-50lct3 r-fdch1b r-dnmrzs r-633pao r-u8s1d r-1wipuzn r-1plcrui r-1v2oles r-lrvibr"><g><path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path></g></svg>
        </div>
    )
}