import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Date from './index';

describe('src/components/Date', () => {

  let wrapper;
  let testProps = {
    value: 'testText'
  };


  beforeEach(() => {
    wrapper = shallow(<Date {...testProps} />);
  });

  it('renders <div>', () => {
    expect(wrapper.find('div')).to.exist
  });

  it('renders the passed prop text', () => {
    expect(wrapper.find('div')).to.have.text('testText')
  });

});


