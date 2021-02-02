import React,{Component} from 'react'
import {connect} from "react-redux";
import {LoginView} from "./LoginView";
import './Login.css';
import {loginAction} from "../../actions/login.actions";
import {history} from "../../history";


class Login extends Component{

    loginHandler=(values)=>{
        this.props.userLogin(values)
    }

    render() {
        return (
            <LoginView
                isLoading={this.props.isLoading}
                loginHandler={this.loginHandler}

            />

        );
    }

}
const mapStateToProps = state =>{
    const {user} = state.login
    return {
        isLoading:user.isLoading,
        authUser:user.isAuthenticated
    }

}
const mapDispatchToProps = {
    userLogin:loginAction.userLogin
}
const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export {ConnectedLogin as Login};
