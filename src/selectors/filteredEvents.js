import { createSelector } from 'reselect';

const getTypesFilter = events => events.typesFilter;
const getVenuesFilter = events => events.venuesFilter;
const getSearchFilter = events => events.searchFilter;
const getEvents = events => events.list;

const getFilteredEvents = (events, typeFilter, venueFilter, searchFilter) => {

  let result = events;

  if (venueFilter) {
    result = result.filter(({myCity})=> {
      return venueFilter === myCity;
    });
  }

  if (typeFilter) {
    result = result.filter(({myType})=> {
      return typeFilter === myType;
    })
  }

  if(searchFilter){
    result = result.filter(({title})=> {
      return title.toUpperCase().includes(searchFilter.toUpperCase());
    })
  }

  //sort in date order
  result = result.sort(function (a, b) {
    return a.myDate - b.myDate;
  });
  return result;
};

export default createSelector(
  getEvents,
  getTypesFilter,
  getVenuesFilter,
  getSearchFilter,
  getFilteredEvents
);






