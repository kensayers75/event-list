import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import s from './index.scss';

export default class Title extends Component {
  render() {
    const {reverse} = this.props;
    return (
      <div className={classnames(s.title, (reverse && s.rev))}>
        {this.props.value}
      </div>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  reverse: PropTypes.bool
};


