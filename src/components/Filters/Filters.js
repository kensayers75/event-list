import React, { Component, PropTypes } from 'react';
import Filter from './../Filter';
import Search from './../Search';
import s from './index.scss';

class Filters extends Component {

  render() {
    const {types, venues, applyVenueFilter, applyTypesFilter, venuesFilter, typesFilter, applySearchFilter } = this.props;
    return (
      <div className={s.filters}>
        <Search action={applySearchFilter} />
        <div className={s.filterWrap}>
          {types && <Filter name='Event Type' selected={typesFilter} options={types} action={applyTypesFilter} />}
          {venues && <Filter name='Location' selected={venuesFilter} options={venues} action={applyVenueFilter} />}
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  types: PropTypes.array,
  venues: PropTypes.array,
  applyVenueFilter: PropTypes.func.isRequired,
  applyTypesFilter: PropTypes.func.isRequired,
  venuesFilter: PropTypes.string,
  typesFilter: PropTypes.string,
  applySearchFilter: PropTypes.func.isRequired
};

export default Filters;
