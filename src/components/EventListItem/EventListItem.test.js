import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import EventListItem from './index';

describe('src/components/EventListItem', () => {

  let minProps = {
    itemAction: () => {},
    data: {
      id: 'id',
      title: 'title',
      date: 'date',
      image: 'url',
      venue: 'venue'
    }
  };

  it('has a link', () => {
    let wrapper = shallow(<EventListItem {...minProps} />);
    expect(wrapper.find('Link')).to.exist
  });

  it('displays image', () => {
    let wrapper = shallow(<EventListItem {...minProps} />);
    expect(wrapper.find('img')).to.exist
  });





});
