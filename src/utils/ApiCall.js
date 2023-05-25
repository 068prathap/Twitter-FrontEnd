import Axios from "axios";

export const ApiCall = async(method,data,link) => {
    console.log("api ",data);
    let response;
    switch(method)
    {
        case "post":
        {
            response=await Axios.post(`${process.env.REACT_APP_IPADDRESS}${link}`,data);
            break;
        }
        case "get":
        {
            response=await Axios.get(`${process.env.REACT_APP_IPADDRESS}${link}`,data);
            break;
        }
        case 'postHeader':
        {
            response=await Axios.post(`${process.env.REACT_APP_IPADDRESS}${link}`,data,{headers :{ "authorization": `Bearer ${sessionStorage.getItem("token")}`}});
            break;
        }
        case 'getHeader':
        {
            response=await Axios.get(`${process.env.REACT_APP_IPADDRESS}${link}`,{headers :{ "authorization": `Bearer ${localStorage.getItem("token")}`}});
            break;
        }
        case 'deleteHeader':
        {
            response=await Axios.delete(`${process.env.REACT_APP_IPADDRESS}${link}/${data.friendid}`,{headers :{ "authorization": `Bearer ${localStorage.getItem("token")}`}});
            break;
        }
        case 'postHeaderlocal':
        {
            response=await Axios.post(`${process.env.REACT_APP_IPADDRESS}${link}`,data,{headers :{ "authorization": `Bearer ${localStorage.getItem("token")}`}});
            console.log(response);
            break;
        }
    }
    return response.data;
}