import {loginConstants} from "../constants";

const initialState ={
    user:{isAuthenticated:false,isLoading:false}
};
const {
   USER_LOGIN,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQ
} = loginConstants;

export function login(state = initialState,payload) {
    switch (payload.type) {
        case USER_LOGIN_REQ:
            return {...state,user:{...state.user,isLoading: true}};
        case USER_LOGIN:
            return {...state,user:{...state.user,isLoading: false,isAuthenticated: true}};
        case USER_LOGIN_FAIL:
            return {...state,user:{...state.user,isLoading: false,isAuthenticated: false}};
        default:
            return state;

    }

}