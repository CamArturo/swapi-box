import React from 'react';
import {shallow} from 'enzyme';
import Navigation from "./Navigation";

describe('Navigation test', () => {

  const selectCategory = jest.fn();
  const displayFavorites = jest.fn();

  it('should match the snapshot', () => {

    const wrapper = shallow(<Navigation selectCategory={selectCategory}
                                        displayFavorites={displayFavorites}/>);

    expect(wrapper).toMatchSnapshot();
  });

});