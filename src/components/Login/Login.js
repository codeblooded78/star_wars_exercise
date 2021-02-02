import React,{Component} from 'react'
import {connect} from "react-redux";
import {LoginView} from "./LoginView";
import './Login.css';
import {loginAction} from "../../actions/login.actions";


class Login extends Component{
    componentDidMount() {
        const{history} = this.props
        if(!!localStorage.access_token){
           history.push('/dashboard')
        }
    }

    /**
     * @name loginHandler
     * @params values
     * @descriptiton handler of login
     **/
    loginHandler=(values)=>{
        const{userLogin,history} = this.props
       userLogin(values,history)
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
