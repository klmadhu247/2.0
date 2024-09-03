import React from "react";
import { DECREMENT, INCREMENT } from "./constants";


const insState = {
    Name:'Madhu.KL',
    count:1
}

const redu = (state=insState,action)=>
{
    switch(action.type){
        case INCREMENT: 
        return {...state, count:state.count+1}

        case  DECREMENT:
        return {...state, count:state.count-1}
        default :
        return state;
    }
}
export default redu;