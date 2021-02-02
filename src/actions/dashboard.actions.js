import {dashboardConstants} from '../constants';
import {dashboardService} from '../services';


export const dashboardAction = {
    getAllPlanets

};
/**
 * @name getAllPlanets
 * @params
 * @descriptiton fetches all planets
 **/
function getAllPlanets() {
    return async dispatch => {
        try {
            const t1 = await dashboardService.getAllPlanets();
            dispatch(success(t1))

        } catch (e) {
            dispatch(failure(e.toString()));
        }
    };

    function request() {
        return {type: dashboardConstants.GET_ALL_PLANETS_REQ}
    }
    function success(data) {
        return {type: dashboardConstants.GET_ALL_PLANETS, data}
    }

    function failure(data) {
        return {type: dashboardConstants.GET_ALL_PLANETS_ERR, data}
    }
}