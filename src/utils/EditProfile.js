import { ApiCall } from "./ApiCall"

export function changeUserData(name,bio,location,website,DOB,month,day,year,monthAndYearVisible,yearVisible)
{
    if(day && month && year)
    {
        DOB=day+' '+month+' '+year;
    }   
    let data={
        name:name,
        bio:bio,
        location:location,
        website:website,
        birthDate:DOB,
        monthDayVisibility:monthAndYearVisible,
        yearVisibility:yearVisible,
    }
    console.log('kjsbahcbs',monthAndYearVisible+'--'+yearVisible);
    ApiCall('patchHeader',data,'updateprofile')
}