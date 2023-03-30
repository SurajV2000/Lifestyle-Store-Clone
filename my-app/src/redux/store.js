import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import thunk from "redux-thunk";
import {reducer as MenReducer} from "./MenReducer/reducer"


const rootReducer = combineReducers({
   MenReducer
  });
// import {AuthReducer} from "../redux/authReducer/reducer"


const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    
    // auth: AuthReducer,
});
  
  export const store = legacy_createStore(reducers,composeEnhancers(middleware));