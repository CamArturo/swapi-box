import React from 'react';
import {shallow} from 'enzyme';
import AudioPlayer from "./AudioPlayer";

it('renders without crashing', () => {
  const wrapper = shallow(<AudioPlayer/>);

  expect(wrapper).toMatchSnapshot();
});
