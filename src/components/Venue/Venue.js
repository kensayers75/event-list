import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import s from './index.scss';

export default class Venue extends Component {
  render() {
    const {reverse} = this.props;
    return (
      <div className={classnames(s.venue, (reverse && s.rev))}>
        <div className={s.venueIcon}></div>
        {this.props.value}
      </div>
    );
  }
}

Venue.propTypes = {
  value: PropTypes.string.isRequired,
  reverse: PropTypes.bool
};


