import React, { Component, PropTypes } from 'react';
import ReactHtmlParser from 'html-react-parser';
import LazyLoad from 'react-lazy-load';
import classnames from 'classnames';
import { Link } from 'react-router';
import Date from './../Date';
import Title from './../Title';
import Venue from './../Venue';
import s from './index.scss';

class EventListItem extends Component {

  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const {itemAction, data: {id}} = this.props;
    itemAction(id);
  }

  render() {
    const { data : {id, title, date, image, venue} } = this.props;
    return (
      <Link onClick={this.handleOnClick} key={id} className={s.eventListItem} >
        <div className={classnames(s.img, (image ? '': s.noImg))}>
          {image && <LazyLoad>
            <img src={image} alt={`${title}${{venue}}`}/>
          </LazyLoad>}
        </div>
        <div className={s.content}>
          <Date value={date} />
          <Title value={ReactHtmlParser(title)} />
          <Venue value={ReactHtmlParser(venue)} />
        </div>
      </Link>
    )
  }
}

EventListItem.propTypes = {
  data: PropTypes.object.isRequired,
  itemAction: PropTypes.func.isRequired
};

export default EventListItem;
