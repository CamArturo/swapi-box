import React from 'react';
import {shallow} from 'enzyme';
import Scroller from './Scroller';

describe('Scroller', () => {
  const mockFilmsInfo = {
    title: 'test-title',
    scroll: 'Some movie scroll',
    date: 'Movie-Release-Date'
  };
  it('should match a snapshot', () => {
    const wrapper = shallow(
      <Scroller
        filmsInfo={mockFilmsInfo}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});