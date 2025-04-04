import { createStore } from "redux";
import EmployeeReducer from "./EmployeeReducer";
import { loadState,SetState } from "../utils/localStorage";

let persistData = loadState()

const store = createStore(EmployeeReducer,persistData);

store.subscribe(()=>{
    SetState(store.getState())
})

export default store;
