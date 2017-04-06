import React, { Component, PropTypes } from 'react';
import s from './index.scss';

export default class Date extends Component {
  render() {
    return (
      <div className={s.date}>
        {this.props.value}
      </div>
    );
  }
}

Date.propTypes = {
  value: PropTypes.string.isRequired
};