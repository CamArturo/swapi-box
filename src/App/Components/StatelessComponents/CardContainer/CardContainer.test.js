import React from 'react';
import {shallow} from 'enzyme';
import CardContainer from "./CardContainer";

describe('CardContainer test', () => {

  it('should match the snapshot', () => {

    const wrapper = shallow(<CardContainer />);

    expect(wrapper).toMatchSnapshot();
  });

});