import Signup from "../signup/Signup";
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import Login from '../login/Login';

export default function LandingPage(props)
{
    const navigate=useNavigate();

    return(
        <div>
            <button onClick={()=>navigate('/signup')}>click here to signup</button>
            <button onClick={()=>navigate('/login')}>click here to login</button>
            {props.signup?<Signup/>:<></>}
            {props.login?<Login/>:<></>}
        </div>
    )
}