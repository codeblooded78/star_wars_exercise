import { combineReducers } from 'redux';
import {login} from "./login.reducer";
import {dashboard} from "./dashboard.reducer";

const appReducer = combineReducers({
    login,
    dashboard

})
// Reset the redux store state during logut
const rootReducer = ( state, action ) => {
    if ( action.type === 'USER_LOGOUT' ) {
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;