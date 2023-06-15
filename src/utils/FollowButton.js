import { ApiCall } from "./ApiCall";

export async function AddFollower(id)
{
    let data=id
    let response=await ApiCall('getHeaderParams',data,'addFollower')
}

export async function RemoveFollower(id)
{
    let data={
        friendid:id
    }
    let response=await ApiCall('deleteHeader',data,'unFollow')
}