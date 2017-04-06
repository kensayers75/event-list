import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchEventList, changeActiveEvent, applyVenueFilter, applyTypesFilter, applySearchFilter } from './../../actions/events';
import filteredEvents from './../../selectors/filteredEvents';

import EventList from './../../components/EventList';

class EventsListContainer extends Component {

  componentDidMount() {
    const { fetchEventList } = this.props;
    if (fetchEventList) {
      fetchEventList();
    }
  }

  render() {
    const { pending, list, error} = this.props;
    return (
      <div>
        {!pending && list && <EventList {...this.props} />}
        {error && <p>{error}</p>} {pending && <p>Loading events...</p>}
      </div>
    );
  }
}

function mapStateToProps({events}) {
  return {
    list: filteredEvents(events),
    error: events.error,
    pending: events.pending,
    types: events.types,
    venues: events.venues,
    venuesFilter: events.venuesFilter,
    typesFilter: events.typesFilter
  };
}

export default connect(mapStateToProps, {fetchEventList, changeActiveEvent, applyVenueFilter, applyTypesFilter, applySearchFilter})(EventsListContainer);

EventsListContainer.propTypes = {
  list: PropTypes.array,
  error: PropTypes.string,
  pending: PropTypes.bool,
  fetchEventList: PropTypes.func.isRequired
};