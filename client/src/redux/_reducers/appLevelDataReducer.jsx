export default function reducerHierarchicalData(state={
    hierarchicalData: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_HIRARCHICALDATA": {
        return {...state, fetching: true}
      }
      case "FETCH_HIRARCHICALDATA_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_HIRARCHICALDATA_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          hierarchicalData: action.payload,
        }
      }
    }

    return state
}
