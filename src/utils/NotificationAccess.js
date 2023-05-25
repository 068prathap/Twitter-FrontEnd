import { ApiCall } from "./ApiCall";

export function notificationAccessTrue()
{
    console.log('true')
    let notificationAccess={
        'notification':true
    }
    ApiCall('postHeader',notificationAccess,'notification_permission');
}
export function notificationAccessFalse()
{
    console.log('false');
    let notificationAccess={
        'notification':false
    }
    ApiCall('postHeader',notificationAccess,'notification_permission');
}