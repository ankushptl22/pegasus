import axios from "axios";
import apiData from  '../../json/ApiData.json';

var env = process.env.NODE_ENV || 'dev';
const envVar = require('../../uiconfig/config.'+env);

const ProviderGraphAPI = envVar.uri+envVar.port+envVar.registry+envVar.project+apiData.apis.getProviderCount;
const datasetForApi = {
year: '2017'
}

export function fetchCountProviders() {
  return function(dispatch) {
    dispatch({type: "FETCH_PROVIDERSCOUNT"});
    
    //axios.get("https://swapi.co/api/people/4/?format=json")
    axios.post(ProviderGraphAPI, datasetForApi)
      .then((response) => {
        dispatch({type: "FETCH_PROVIDERSCOUNT_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PROVIDERSCOUNT_REJECTED", payload: err})
      })
  }
}