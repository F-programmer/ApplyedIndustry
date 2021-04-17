import { combineReducers } from "redux";

// reducers
import { loader, snacker, persisted, normal } from "./index";

const reducers = combineReducers({ loader, snacker, persisted, normal });

export default reducers;
export { reducers };
