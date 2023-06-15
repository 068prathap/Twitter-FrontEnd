const initialState={
    count:0,
    count1:1
}

export function reducer (state = initialState, action)
{
    function temp()
    {
        action.property.forEach((element,index) => {
            state[element]=action.value[index]
        });
        console.log(state);
        return{
            ...state
        }
    }
    switch (action.type) {
        case 'change':
            return(
                temp()
            )
        default:
            return{
                ...state
            }
    }
}