import {
  FETCH_EVENT_LIST_PENDING,
  FETCH_EVENT_LIST_SUCCESS,
  FETCH_EVENT_LIST_FAILURE,
  CHANGE_ACTIVE_EVENT,
  FETCH_EVENT_DETAIL_PENDING,
  FETCH_EVENT_DETAIL_SUCCESS,
  FETCH_EVENT_DETAIL_FAILURE,
  APPLY_VENUE_FILTER,
  APPLY_TYPE_FILTER,
  APPLY_SEARCH_FILTER
} from './../actions/types';

import {getLocationFromVenue, cleanEventType} from './../helpers';

const initialState = {
  list: [],
  pending: false,
  error: '',
  eventDetail: null,
  eventDetailPending: false,
  eventDetailError: '',
  sortBy: 'date',
  types: [],
  venues: [],
  venuesFilter: ''
};


const findUnique = (arr, key) => {
  let result = [];
  arr.forEach((v) => {
    let val = v[key];
    if(key==='venue'){
      val = getLocationFromVenue(val);
    }
    val = cleanEventType(val);
    if(val && (result.indexOf(val)===-1)){
      result.push(val);
    }
  });
  return result.sort();
};

export default function ( state = initialState, action ) {
  switch (action.type) {

    case FETCH_EVENT_LIST_PENDING:
      return Object.assign({}, state, {
        pending: true
      });

    case FETCH_EVENT_LIST_SUCCESS:

      return Object.assign({}, state, {
        pending: false,
        list: action.payload,
        types: findUnique(action.payload, 'myType'),
        venues: findUnique(action.payload, 'myCity')
      });


    case FETCH_EVENT_LIST_FAILURE:
      return Object.assign({}, state, {
        pending: false,
        error: action.payload
      });

    case CHANGE_ACTIVE_EVENT:
      return Object.assign({}, state, {
        active: action.payload
      });

    case FETCH_EVENT_DETAIL_PENDING:
      return Object.assign({}, state, {
        eventDetailPending: true
      });

    case FETCH_EVENT_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        eventDetailPending: false,
        eventDetail: action.payload,
        active: null
      });

    case FETCH_EVENT_DETAIL_FAILURE:
      return Object.assign({}, state, {
        eventDetailPending: false,
        eventDetailError: action.payload
      });

    case APPLY_VENUE_FILTER:

      return Object.assign({}, state, {
        venuesFilter: action.payload
      });

    case APPLY_TYPE_FILTER:

      return Object.assign({}, state, {
        typesFilter: action.payload
      });

    case APPLY_SEARCH_FILTER:
      return Object.assign({}, state, {
        searchFilter: action.payload
      });

    default:
      return state;
  }
}
