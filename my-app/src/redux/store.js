import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import thunk from "redux-thunk";
import {reducer as MenReducer} from "./MenReducer/reducer"




import {reducer as AuthReducer} from "../redux/authReducer/reducer"


const rootReducer = combineReducers({
   MenReducer,
   AuthReducer
  });
  


const middleware = applyMiddleware(thunk);

  


// import {AuthReducer} from "../redux/authReducer/reducer"






const reducers = combineReducers({
    
    auth: AuthReducer,
});

 const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



  
   export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
