import './Button.css';
import { useRef, useState } from 'react';

export default function Button(props)
{
    const next=useRef();
    const [temp,setTemp]=useState(0);

    if (props.buttonChange == true)
    {
        next.current.classList.add('Next-1');
        if(temp==0)
        {
            setTemp(1);
        }
    }
    else if (temp == 1)
    {
        next.current.classList.remove('Next-1');
    }

    return (
        <button ref={next} disabled={!props.activation} onClick={() => props.onClick()} className={props.class}>
            <p>{props.text}</p>
        </button>
    )
}