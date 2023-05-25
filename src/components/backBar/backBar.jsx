import { useNavigate } from "react-router-dom";
import { navigateBackward } from "../../utils/Button";

export default function Close_bar(props)
{
    const navigate = useNavigate();

    return(
        <div className="su1_1-s1" onClick={()=>navigateBackward(props.priorLink,props.liveLink)}>
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-1yevf0r r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-meisx5"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
        </div>
    )
}