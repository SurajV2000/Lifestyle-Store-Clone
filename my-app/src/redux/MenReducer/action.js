import axios from "axios"
import { MEN_REQUEST_FAILURE, MEN_REQUEST_PENDING, MEN_REQUEST_SUCCESS } from "./actionType"

export const getmens=(paramObj)=>(dispatch)=>{
    dispatch({type:MEN_REQUEST_PENDING})
    axios.get(`http://localhost:8080/men?_limit=12`,paramObj).then((res)=>{
    console.log(res.data)
    dispatch({type:MEN_REQUEST_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:MEN_REQUEST_FAILURE})
    })
}