import React, { Component } from 'react';
import s from './index.scss';

export default class FixedContainer extends Component {
  render() {
    return <div className={s.fixedContainer}>
      {this.props.children}
    </div>
  }
}

FixedContainer.propTypes = {
  children: React.PropTypes.node
};
