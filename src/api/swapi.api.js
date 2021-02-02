import axios from 'axios';
const baseUrl = 'https://swapi.dev/api/'
export const _getPlanets = (query) => axios.get(`${baseUrl}planets/${query}/`);