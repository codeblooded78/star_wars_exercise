import React, {useEffect} from 'react'
import {Formik, ErrorMessage, Field} from 'formik';
import {useSelector, useDispatch} from 'react-redux'
import * as Yup from 'yup';
import logo from '../../assets/logo.png';
import './Login.css';
import {loginAction} from "../../actions/login.actions";

export const Login = ({
                           history

                       }) => {
    const dispatch = useDispatch();

    const {authUser, isLoading} = useSelector(state => {
            const {user} = state.login
            return {
                isLoading: user.isLoading,
                authUser: user.isAuthenticated
            }
        }
    )

    useEffect(() => {
        if (!!localStorage.access_token) {
            history.push('/dashboard')
        }
    }, []);


    /**
     * @name loginHandler
     * @params values
     * @descriptiton handler of login
     **/
    const loginHandler = (values) => {
        dispatch(loginAction.userLogin(values, history))
    }

    return (
        <div className="loginbox">
            <img src={logo} className="avatar" alt={''}/>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}

                validationSchema={Yup.object({
                    username: Yup.string()
                        .trim()
                        .required('Username is required'),
                    password: Yup.string()
                        .trim()
                        .max(4, 'Password max-length can be 4')
                        .required('Password is required')

                })}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(false);
                    loginHandler(values)

                }}
            >
                {formik => (
                    <form role="form" name="login" onSubmit={formik.handleSubmit} noValidate>
                        <p>Username</p>
                        <input type="text"
                               name="username"
                               placeholder="Enter Username"
                               {...formik.getFieldProps('username')}
                        />
                        <ErrorMessage component="span" name="username"
                                      className="col-sm-8 col-sm-push-4 error"/>
                        <p>Password</p>
                        <input type="password"
                               name=""
                               placeholder="Enter Password"
                               {...formik.getFieldProps('password')}
                        />
                        <ErrorMessage component="span" name="password"
                                      className="col-sm-8 col-sm-push-4 error"/>
                        <div className="text-center">
                            {
                                isLoading ?
                                    <button type='button' className="btn btn-lg btn-primary"
                                            disabled={isLoading}>Loading</button>
                                    :
                                    <button type='submit' className="btn btn-lg btn-primary"
                                            disabled={!formik.isValid}>Login</button>
                            }

                        </div>


                    </form>
                )
                }
            </Formik>

        </div>
    )

}
