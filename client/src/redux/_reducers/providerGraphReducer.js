export default function reducer(state={
    providerData: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PROVIDERS": {
        return {...state, fetching: true}
      }
      case "FETCH_PROVIDERS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PROVIDERS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          providerData: action.payload,
        }
      }
    }

    return state
}
