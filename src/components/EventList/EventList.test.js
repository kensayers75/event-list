import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import EventList from './index';

describe('src/components/EventList', () => {

  let testProps = {
    list: [],
    changeActiveEvent: () => {},
    pending: false
  };

  it('displays message when no event found', () => {
    let wrapper = shallow(<EventList {...testProps} />);
    expect(wrapper.find('h2')).to.exist
  });

});
