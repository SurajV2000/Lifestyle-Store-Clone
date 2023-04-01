import {
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNIN_FAILURE,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    GET_USER,
  } from "./actionTypes";
  import axios from "axios";
  
  export const SignUpFunc = (payload) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    axios
      .post("http://localhost:8080/registeredUser", payload)
      .then((response) => {
        dispatch({ type: SIGNUP_SUCCESS});
        
      })
      .catch((e) => {
        dispatch({ type: SIGNUP_FAILURE });
        
      });
  };
  
  export const getdata = (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST });
    axios
    .get("http://localhost:8080/registeredUser").then((res)=>{
      
      dispatch({ type: GET_USER, payload: res.data });
    }).catch(()=>{
      dispatch({ type: SIGNIN_FAILURE });
    })
    
    
  };

   export const loginFunction=(payload)=>(dispatch)=>{
    dispatch({type:SIGNIN_SUCCESS,payload:payload})
    console.log(payload)
   }
  