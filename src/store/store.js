import { rootReducer } from "../Reducer/combineReducer";
import { legacy_createStore } from "redux";

export const store = legacy_createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())