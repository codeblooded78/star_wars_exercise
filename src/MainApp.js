import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {Protected} from "./components/Protected";
import  {history}  from './history';
import {Login} from "./components/Login";
import App from './App';
import {Dashboard} from "./components/Dashboard";
class MainApp extends Component{
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Protected component={App} />
                </Switch>
            </Router>
        )
    }
}
export default connect(null, null)(MainApp)