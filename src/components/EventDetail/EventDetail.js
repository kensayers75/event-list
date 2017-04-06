import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import ReactHtmlParser from 'html-react-parser';
import ContentHeader from './ContentHeader';
import Date from './../Date';
import Title from './../Title';
import Venue from './../Venue';
import s from './index.scss';

class EventDetail extends Component {

  render() {
    const { eventDetail : { title, url, date,  venue, image, type, information_title, information_description } } = this.props;

    return (
      <div>
        <ContentHeader image={image}>
          <Date value={date}/>
          <Title value={ReactHtmlParser(title)} reverse={true} />
          <Venue value={ReactHtmlParser(venue)} reverse={true} />
        </ContentHeader>
        <div className={s.content}>
          <div className={s.side}>
            <Link className={s.cta} href={url}>Buy Tickets</Link>
          </div>
          <div className={s.main}>
            <div className={s.eventType}>Event Type: <span>{type}</span></div>
            <div className={s.informationTitle}>
              {ReactHtmlParser(information_title)}
            </div>
            <div className={s.informationDesc}>
              {ReactHtmlParser(information_description)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventDetail.propTypes = {
  eventDetail: PropTypes.object
};

export default EventDetail;
