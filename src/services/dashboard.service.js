import {_getPlanets} from '../api/swapi.api'
export const dashboardService = {
    getPlanet,

};

async function getPlanet(query){
    try {
        const t1 = await _getPlanets(query)
        return t1.data;

    }catch (e) {
        return Promise.reject(e);
    }
}