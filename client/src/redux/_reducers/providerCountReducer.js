export default function reducerCount(state={
    providerCountData: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PROVIDERSCOUNT": {
        return {...state, fetching: true}
      }
      case "FETCH_PROVIDERSCOUNT_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PROVIDERSCOUNT_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          providerCountData: action.payload,
        }
      }
    }

    return state
}
