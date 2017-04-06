import React, { Component, PropTypes } from 'react';
import s from './index.scss';

class ContentHeader extends Component {

  render() {
    const { image } = this.props;
    const bgImg = { backgroundImage: `url("${image}")` };

    return (
      <div className={s.header} style={bgImg}>
        <div className={s.headerContent}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

ContentHeader.propTypes = {
  image: PropTypes.string,
  children: React.PropTypes.node
};

export default ContentHeader;
