import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const loggerMiddleware = createLogger();
const {REACT_APP_environment} = process.env;

let tStore;
if(REACT_APP_environment === 'development'){
    tStore = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        ));
}else{
    tStore = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware
        ));
}

export const store = tStore;