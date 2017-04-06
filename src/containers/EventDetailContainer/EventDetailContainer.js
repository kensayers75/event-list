import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchEventDetail } from './../../actions/events';
import EventDetail from './../../components/EventDetail';

class EventDetailContainer extends Component {

  componentDidMount(){
    const { fetchEventDetail, active } = this.props;

    if(fetchEventDetail && active){
      fetchEventDetail(active);
    }
  }

  render() {
    const { eventDetailPending, eventDetail, eventDetailError } = this.props;
    return (
      <div>
        {eventDetailError && <p>{eventDetailError}</p>}
        {eventDetailPending && <p>Loading events...</p>}
        {eventDetail && <EventDetail eventDetail={eventDetail} />}
      </div>
    );
  }
}

function mapStateToProps( { events: { active, eventDetailError,  eventDetailPending,  eventDetail } } ) {
  return { active, eventDetailError,  eventDetailPending,  eventDetail };
}
export default connect(mapStateToProps, { fetchEventDetail })(EventDetailContainer);

EventDetailContainer.propTypes = {
  active: PropTypes.string,
  eventDetailError: PropTypes.string,
  eventDetailPending: PropTypes.bool,
  eventDetail: PropTypes.object,
  fetchEventDetail: PropTypes.func.isRequired
};
