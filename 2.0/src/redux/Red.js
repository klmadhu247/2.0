import { IRAKKU, PEYARMATRU, YETRAVUM } from "./cons";


const ini = {
    Name: 'Madhi',
    Count:1
}


const Reducc= (state=ini,action)=>
{

    switch(action.type)
    {
        case YETRAVUM:
            return{...state,Count:state.Count+1}
        
            case IRAKKU:
                return{...state, Count:state.Count-1}
            case PEYARMATRU:
                return {...state, Name:action.payload}    
            
            default:
                return state;    
    }
return state

}
export default Reducc;