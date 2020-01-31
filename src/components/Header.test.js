import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect to render Header component', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // test should component update
  const instance = wrapper.instance();
  // test the shouldComponentUpdate lifecycle method
  const shouldUpdate = instance.shouldComponentUpdate({}, {});
  expect(shouldUpdate).toBe(false);
})