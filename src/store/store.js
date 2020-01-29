import {createStore, combineReducers} from "redux";
import increment from "../reducers/incrementReducer";
import temperature from "../reducers/temperatureReducer";
import crud from "../reducers/crudReducer";

export const store = createStore(combineReducers({count: increment, temp:temperature, crud}));

