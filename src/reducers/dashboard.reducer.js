import {dashboardConstants} from "../constants";

const initialState ={
    planet:{data:[],error:{}},
    counter:{count:0}
};
const {
    SEARCH_PLANET,
    SEARCH_PLANET_ERROR,
    INC_COUNT
} = dashboardConstants;

export function dashboard(state = initialState,payload) {
    const prevCnt = state.counter.count
    switch (payload.type) {
        case SEARCH_PLANET:
            return {...state,planet:{...state.planet,data:[payload.data]}};
        case SEARCH_PLANET_ERROR:
            return {...state,planet:{...state.planet,error:payload.data}};
        case INC_COUNT:
            return {...state,counter: {count: prevCnt+1}};
        default:
            return state;

    }

}