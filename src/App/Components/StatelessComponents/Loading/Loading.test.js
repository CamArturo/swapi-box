import React from 'react';
import {shallow} from 'enzyme';
import Loading from "./Loading";

it('matchs Snapshot', () => {
  const wrapper = shallow(<Loading/>);

  expect(wrapper).toMatchSnapshot();
});