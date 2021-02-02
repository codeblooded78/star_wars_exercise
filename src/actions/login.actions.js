import { loginConstants} from '../constants';
import {history} from "../history";

export const loginAction = {
    userLogin,
    userLogout

};
function userLogin(values) {
    return async dispatch =>{
        try {
            dispatch(request())
           //fake timeout for login
            localStorage.setItem('username',values.username)
            localStorage.setItem('access_token',guid())
            await setTimeout(() => {

                dispatch (success())
                history.push('/dashboard');

            }, 1500);
            debugger



        }catch (e) {
            dispatch(failure());
        }
    };
    function request() {
        return {type: loginConstants.USER_LOGIN_REQ}
    }

    function success() {
        return {type: loginConstants.USER_LOGIN}
    }

    function failure() {
        return {type: loginConstants.USER_LOGIN_FAIL}
    }
}
function userLogout() {
    return async dispatch =>{
        try {
            dispatch(request())
            delete localStorage.username;
            delete localStorage.access_token;
            history.push('/login')
        }catch (e) {
            dispatch(failure());
        }
    };
    function request() {
        return {type: loginConstants.USER_LOGIN_FAIL}
    }

    function failure() {
        return {type: loginConstants.USER_LOGIN_FAIL}
    }
}
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}