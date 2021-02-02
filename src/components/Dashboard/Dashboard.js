import React,{Component} from 'react'
import {connect} from "react-redux";
import {DashboardView} from "./DashboardView";
import './Dashboard.css'
import {dashboardAction} from "../../actions/dashboard.actions";
import debounce from 'lodash/debounce';
import {loginAction} from "../../actions/login.actions";

class Dashboard extends Component{
    constructor() {
        super();
        this.state = {
            timeElapsed: 0,
            lastSearched: 0,
            planetData:[],
            searchCount:0

        }
        this.searchOnChange = debounce(this.searchOnChange, 1000);
    }
    componentDidMount() {
        this.t1 = setInterval(()=>{
            this.startTimer()
        }, 1000);
        this.props.getAllPlanets();
    }
    componentWillUnmount() {
        clearInterval(this.t1);
    }
    componentDidUpdate(prevProps, prevState) {
        const {planetData,isLoading} = this.props;
        if(JSON.stringify(prevProps.planetData) !== JSON.stringify(this.props.planetData)){
            if(!!this.props.planetData && this.props.planetData.length){
                this.setState({planetData:this.props.planetData})
            }

        }
    }
    /**
     * @name incrCount
     * @descriptiton 1 minute timer
     **/
    incrCount=()=>{
        this.setState({lastSearched:this.state.timeElapsed})
        this.setState({searchCount:this.state.searchCount + 1})
    }

    /**
     * @name startTimer
     * @descriptiton 1 minute timer
     **/
    startTimer=()=>{
        this.setState({timeElapsed:this.state.timeElapsed + 1})
    }
    /**
     * @name filterData
     * @descriptiton filter based on query
     **/
    filterData=(query)=>{
        const {planetData} = this.state
        this.setState({timeElapsed:this.state.timeElapsed + 1})
        const t1 = planetData.filter((val)=>{
            return val.name.toLowerCase() === query.toLowerCase()
        })
        if(t1.length){
            this.setState({planetData:t1})
        }
        if(!t1.length){
            this.setState({planetData:[]})
        }

    }
    /**
     * @name searchOnChange
     * @params query
     * @descriptiton handler for serach bar
     **/
    searchOnChange=(query)=>{
        const {clearSearch} = this.props;
        const {timeElapsed,lastSearched,searchCount} = this.state
        if(!query){
            this.resetState()
            return
        }

        const actualTime = timeElapsed - lastSearched;
        const isAllowed = ((localStorage.username !== 'Luke Skywalker') && (searchCount > 15 && actualTime < 60) )

        try{
            if(!isAllowed){
                this.filterData(query)
                this.incrCount()

            }else{
                window.alert('Luke Skywalker can make more than 15 search in a minute')
            }

        }catch (e) {

        }

    }
    /**
     * @name logoutHandle
     * @params
     * @descriptiton log out handler
     **/
    logoutHandle=()=>{
        const {history,userLogout} = this.props;
        userLogout(history)
    }
    /**
     * @name resetState
     * @params
     * @descriptiton resetState
     **/
    resetState=()=>{
        this.setState({planetData:this.props.planetData})
    }

    render() {
        const {isLoading} = this.props;
        const {planetData} = this.state;
        return (
            (!isLoading &&

                <DashboardView
                searchHandler={this.searchOnChange}
                planetData={planetData}
                logoutHandle={this.logoutHandle}
                resetState={this.resetState}


            />)

        );
    }

}
const mapStateToProps = state =>{
    const {planet} = state.dashboard
    return {
        planetData:planet.data,
        isLoading:planet.isLoading
    }

}
const mapDispatchToProps = {
    getAllPlanets:dashboardAction.getAllPlanets,
    userLogout:loginAction.userLogout,
    clearSearch:dashboardAction.clearState
}
const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export {ConnectedDashboard as Dashboard};
