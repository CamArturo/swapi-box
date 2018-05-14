import React from 'react';
import {shallow} from 'enzyme';
import AudioPlayer from "./AudioPlayer";

it('matches Snapshot', () => {
  const wrapper = shallow(<AudioPlayer/>);

  expect(wrapper).toMatchSnapshot();
});
