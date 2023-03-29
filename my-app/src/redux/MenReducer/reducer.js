import { MEN_REQUEST_FAILURE, MEN_REQUEST_PENDING, MEN_REQUEST_SUCCESS } from "./actionType"

const initialState={
    isLoading: false,
    isError: false,
    men: [],
  }

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case MEN_REQUEST_FAILURE:
            return {  ...state,isLoading:false,isError:true}
            case MEN_REQUEST_SUCCESS:
                return {...state,isLoading:false,men:payload}
                case MEN_REQUEST_PENDING:
                    return {...state,isLoading:true}
                    default:return state
    }
}