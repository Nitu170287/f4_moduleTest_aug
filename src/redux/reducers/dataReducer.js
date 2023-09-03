import { DATA_LOADING, DATA_SUCCESS, DATA_ERROR } from "../actions/actionType";


const initialValue = {
    loading:false,
    error: false,
    data: [],
    history:[]
}

const dataReducer = (state=initialValue, action)=>{
        switch(action.type){
            case DATA_LOADING :
            return {...state, loading:true}

            case DATA_SUCCESS:
                return {...state, loading: false, data: action.payload, history: [...state.history, action.payload[0]]}

            case DATA_ERROR :
                return {...state, loading: false, error: action.payload}
            
            default :
            return state
        }
}

export default dataReducer