import React, { Component, PropTypes } from 'react';
import EventListItem from './../EventListItem';
import Filters from './../Filters';
import s from './index.scss';

class EventList extends Component {

  render() {
    const { list, changeActiveEvent, pending } = this.props;

    return (
      <div className={s.eventsList}>
        <Filters {...this.props} />
        {list.length!==0 && list.map((event,i) => {
          return (
            <div key={i}>
              <EventListItem data={event} itemAction={changeActiveEvent} />
            </div>
          );
        })}
        { !pending && list.length===0 && <h2>Sorry... no event using those filters</h2> }
      </div>
    )
  }
}

EventList.propTypes = {
  list: PropTypes.array,
  changeActiveEvent: PropTypes.func.isRequired,
  pending: PropTypes.bool
};


export default EventList;
