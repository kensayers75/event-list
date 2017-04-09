import { createSelector } from 'reselect';

const getTypesFilter = events => events.typesFilter;
const getVenuesFilter = events => events.venuesFilter;
const getSearchFilter = events => events.searchFilter;
const getEvents = events => events.list;

const getFilteredEvents = (events, typeFilter, venueFilter, searchFilter) => {

  if (venueFilter) {
    events = events.filter(({myCity})=> {
      return venueFilter === myCity;
    });
  }

  if (typeFilter) {
    events = events.filter(({myType})=> {
      return typeFilter === myType;
    });
  }

  if(searchFilter){
    events = events.filter(({title})=> {
      return title.toUpperCase().includes(searchFilter.toUpperCase());
    });
  }

  //sort in date order
  events = events.sort(function (a, b) {
    return a.myDate - b.myDate;
  });
  return events;
};

export default createSelector(
  getEvents,
  getTypesFilter,
  getVenuesFilter,
  getSearchFilter,
  getFilteredEvents
);






