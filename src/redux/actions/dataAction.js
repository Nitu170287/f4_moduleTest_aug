import { DATA_LOADING, DATA_SUCCESS, DATA_ERROR } from "./actionType";


// action creator

export const dataLoading = ()=>{
    return{
        type:DATA_LOADING
    }
}

export const dataSuccess =(data)=>{

    return{
        type: DATA_SUCCESS,
        payload: data
    }
}

export const dataError =(error)=>{

    return{
        type: DATA_ERROR,
        payload: error
    }
}