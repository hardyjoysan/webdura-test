import {createStore} from 'redux';

const initState = {
  service_id: null,
  active_status: "PENDING"
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SERVICE_CHANGE":
        console.log("service change action");
        return;

    case "BOOKING_TAB":
        return {
          ...state,
          active_status: action.status
        }

    default:
      return state;
  }
}

const Store = createStore(reducer);

export default Store;
