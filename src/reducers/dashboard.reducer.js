import {dashboardConstants} from "../constants";

const initialState ={
    planet:{data:[],error:{},isLoading:true},
    counter:{count:0}
};
const {
    SEARCH_PLANET,
    SEARCH_PLANET_ERROR,
    INC_COUNT,
    GET_ALL_PLANETS,
    GET_ALL_PLANETS_ERR,
    GET_ALL_PLANETS_REQ
} = dashboardConstants;

export function dashboard(state = initialState,payload) {
    const prevCnt = state.counter.count
    switch (payload.type) {
        case GET_ALL_PLANETS_REQ:
            return {...state,planet:{...state.planet,isLoading: true}};
        case SEARCH_PLANET:
            return {...state,planet:{...state.planet,data:[payload.data]}};
        case SEARCH_PLANET_ERROR:
            return {...state,planet:{...state.planet,error:payload.data}};
        case GET_ALL_PLANETS:
            return {...state,planet:{...state.planet,data:payload.data,isLoading:false}};
        case GET_ALL_PLANETS_ERR:
            return {...state,planet:{...state.planet,error:payload.data,isLoading:false}};
        case INC_COUNT:
            return {...state,counter: {count: prevCnt+1}};
        default:
            return state;

    }

}