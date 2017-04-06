import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import ContentHeader from './index';

describe('src/components/EventDetail/ContentHeader', () => {

  let testProps = {
    image: 'test'
  };

  it('renders <div>', () => {
    let wrapper = shallow(<ContentHeader {...testProps} />);
    expect(wrapper.find('div')).to.exist
  });

  it('<div> to have backgroundImage equal to passed string', () => {
    let div = render(<ContentHeader {...testProps} />).find('div');
    expect(div).to.have.style('background-image').equal('url("test")');
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <ContentHeader>
        <div className="unique"></div>
      </ContentHeader>
    );
    expect(wrapper.contains(<div className="unique"></div>)).to.equal(true);
  });

});
