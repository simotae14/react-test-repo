import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
  const wrapper = shallow(<CounterButton />);
  expect(wrapper).toMatchSnapshot();
  const instance = wrapper.instance();
  //Accessing component state
  expect(instance.state.count).toBe(1);
  // test the shouldComponentUpdate lifecycle method
  const shouldUpdate = instance.shouldComponentUpdate({}, { count: 1});
  // if the state is not changed
  expect(shouldUpdate).toBe(false);
  // click on button and change the counter
  wrapper.find('button').props().onClick();
  expect(wrapper.state()).toEqual({ count: 2 });
  // if the state is changed
  const shouldUpdate2 = instance.shouldComponentUpdate({}, { count: 1});
  expect(shouldUpdate2).toBe(true);
})