import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import thunk from "redux-thunk";
import {reducer as MenReducer} from "./MenReducer/reducer"
import {AuthReducer} from "../redux/authReducer/reducer"


const rootReducer = combineReducers({
   MenReducer
  });
  
  export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));