import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {staffReducer} from "./staff-reducer";

let reducers = combineReducers(
    {
        staff: staffReducer
    }
)

export let store = createStore(reducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof reducers>