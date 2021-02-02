import {_getPlanets,_getAllPlanets} from '../api/swapi.api'
export const dashboardService = {
    getAllPlanets
};

async function getAllPlanets(){
    try {
        const t1 = await _getAllPlanets()
        return t1.data.results;

    }catch (e) {
        return Promise.reject(e);
    }
}