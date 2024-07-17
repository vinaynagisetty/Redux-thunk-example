import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"


let intialState={
    userDetails:{}
}
function userReducer(state=intialState,action){
    switch(action.type){
        case "Add":
            return {...state,userDetails:action.payload}
        default :
        return state    
    }
}

let store=createStore(userReducer,applyMiddleware(thunk))
export default store;