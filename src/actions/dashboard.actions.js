import {dashboardConstants} from '../constants';
import { dashboardService} from '../services';


export const dashboardAction = {
    getPlanets

};

function getPlanets(query) {
    return async dispatch =>{
        try {
            const t1 = await dashboardService.getPlanet(query);
            dispatch(countValue())
            dispatch(success(t1))

        }catch (e) {
            dispatch(failure(e.toString()));
        }
    };
    function countValue() {
        return {type: dashboardConstants.INC_COUNT}
    }

    function success(data) {
        return {type: dashboardConstants.SEARCH_PLANET, data}
    }

    function failure(data) {
        return {type: dashboardConstants.SEARCH_PLANET_ERROR, data}
    }
}