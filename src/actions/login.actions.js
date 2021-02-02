import { loginConstants} from '../constants';

export const loginAction = {
    userLogin,
    userLogout

};
/**
 * @name userLogin
 * @params values,history
 * @descriptiton mimics login action of user
 **/
function userLogin(values,history) {
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
/**
 * @name userLogout
 * @params history
 * @descriptiton logs user out after deleting the storage
 **/
function userLogout(history) {
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