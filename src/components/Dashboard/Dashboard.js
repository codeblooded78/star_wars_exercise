import React,{Component} from 'react'
import {connect} from "react-redux";
import {DashboardView} from "./DashboardView";
import './Dashboard.css'
import {dashboardAction} from "../../actions/dashboard.actions";
import debounce from 'lodash/debounce';
import { notification } from 'antd';
import {loginAction} from "../../actions/login.actions";

class Dashboard extends Component{
    constructor() {
        super();
        this.state = {
            timeElapsed: 0,
            lastSearched: 0

        }
        this.searchOnChange = debounce(this.searchOnChange, 1000);
    }
    componentDidMount() {
        this.t1 = setInterval(()=>{
            this.startTimer()
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.t1);
    }

    startTimer=()=>{
        this.setState({timeElapsed:this.state.timeElapsed + 1})
    }
    searchOnChange=async (query)=>{
        const {getPlanets} = this.props;
        const {timeElapsed,lastSearched} = this.state
        const actualTime = timeElapsed - lastSearched;
        const isAllowed = ((localStorage.username !== 'Luke Skywalker') && (this.props.searchCount > 15 && actualTime < 60) )

        try{
            if(!isAllowed){
                await getPlanets(query)
                this.setState({lastSearched:this.state.timeElapsed})
            }else{
                window.alert('Luke Skywalker can make more than 15 search in a minute')
            }

        }catch (e) {

        }

    }
    logoutHandle=()=>{
        this.props.userLogout()
    }

    render() {
        const {planetData} = this.props;
        return (
            <DashboardView
                searchHandler={this.searchOnChange}
                planetData={planetData}
                logoutHandle={this.logoutHandle}

            />

        );
    }

}
const mapStateToProps = state =>{
    const {planet,counter} = state.dashboard
    return {
        planetData:planet.data,
        searchCount:counter.count
    }

}
const mapDispatchToProps = {
    getPlanets:dashboardAction.getPlanets,
    userLogout:loginAction.userLogout
}
const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export {ConnectedDashboard as Dashboard};
