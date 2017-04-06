import axios from 'axios';
import { browserHistory } from 'react-router';

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

import {applyEventData} from './../helpers';


/****************************
 FETCH EVENTS
 ****************************/

const fetchEventListPending = () => {
  return {
    type: FETCH_EVENT_LIST_PENDING
  }
};

export const fetchEventList = () => {
  return (dispatch) => {
    dispatch(fetchEventListPending());
    return axios.get('http://tech-test.egtools.co.uk/events/')
      .then((response) => {
        dispatch({
          type: FETCH_EVENT_LIST_SUCCESS,
          payload: applyEventData(response.data) /* I felt is was more efficient to apply filter data and date at this point */
        })
      })
      .catch((error) => {
        dispatch({
          type: FETCH_EVENT_LIST_FAILURE,
          payload: error
        });
      })
  }
};

/****************************
 ACTIVE EVENT
 ****************************/

export const changeActiveEvent = (id) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_ACTIVE_EVENT,
      payload: id
    });
    browserHistory.push('/event');
  }
};

/****************************
 FETCH EVENT DETAILS
 ****************************/

const fetchEventDetailPending = () => {
  return {
    type: FETCH_EVENT_DETAIL_PENDING
  }
};

export const fetchEventDetail = (id) => {
  return (dispatch) => {
    dispatch(fetchEventDetailPending());
    return axios.get(`http://tech-test.egtools.co.uk/events/${id}`)
      .then((response) => {
        dispatch({
          type: FETCH_EVENT_DETAIL_SUCCESS,
          payload: response.data
        })
      })
      .catch((error) => {
        dispatch({
          type: FETCH_EVENT_DETAIL_FAILURE,
          payload: error
        });
      })
  }
};

/****************************
 CHANGE FILTER
 ****************************/

export const applyVenueFilter = (value) => {
  return (dispatch) => {
    dispatch({
      type: APPLY_VENUE_FILTER,
      payload: value
    });
  }
};


export const applyTypesFilter = (value) => {
  return (dispatch) => {
    dispatch({
      type: APPLY_TYPE_FILTER,
      payload: value
    });
  }
};

/****************************
 SEARCH FILTER
 ****************************/

export const applySearchFilter = (value) => {
  return (dispatch) => {
    dispatch({
      type: APPLY_SEARCH_FILTER,
      payload: value
    });
  }
};