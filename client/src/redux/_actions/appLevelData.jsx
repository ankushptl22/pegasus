import axios from "axios";
import apiData from  '../../json/ApiData.json';

var env = process.env.NODE_ENV || 'dev';
const envVar = require('../../uiconfig/config.'+env);

const HierarchicalAPI = envVar.uri+envVar.port+envVar.registry+envVar.project+apiData.apis.hirarchicalData;

export function fetchHirarchicalData() {
  return function(dispatch) {
    dispatch({type: "FETCH_HIRARCHICALDATA"});
    
    //axios.get("https://swapi.co/api/people/4/?format=json")
    axios.post(HierarchicalAPI)
      .then((response) => {
        dispatch({type: "FETCH_HIRARCHICALDATA_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_HIRARCHICALDATA_REJECTED", payload: err})
      })
  }
}