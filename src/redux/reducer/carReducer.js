
import { GET_CARS_ID } from "../types";

const initialState={
    data:[],
    isLoading:true,
    error:null,
}

const carReducer =(state = initialState,action)=>{
    const {type,payload,error} = action;
    switch(type){
        case `${GET_CARS_ID}_LOADING`:
        return{
            ...state,
        }
        case `${GET_CARS_ID}_FULFILLED`:
        return{
            ...state,
            data:payload,
            isLoading:false,
        }
        case `${GET_CARS_ID}_ERROR`:
        return{
            ...state,
            isLoading:false,
            error:error,
        }
        default:
        return{
            ...state
        }
    }
}

export default carReducer;