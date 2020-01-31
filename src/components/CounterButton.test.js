import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('test the CounterButton component', () => {
  it('expect to render CounterButton component', () => {
    // create the prop mocked value
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state()).toEqual({ count: 1 });
  });
  it('correctly increment the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('[id="counter"]').simulate('click');
    // test if the state is changed
    expect(wrapper.state()).toEqual({ count: 2 });
    wrapper.find('[id="counter"]').simulate('click');
    // test if the state is changed
    expect(wrapper.state()).toEqual({ count: 3 });
    wrapper.find('[id="counter"]').simulate('keypress');
    // test if the state is changed
    expect(wrapper.state()).toEqual({ count: 3 });
  });
  it('correctly have the props passed', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    // test the props value
    expect(wrapper.props().color).toEqual('red' );
  });
  it('correctly call the shouldUpdate lifecycle method returning the correct value', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    const instance = wrapper.instance();
    // test the shouldComponentUpdate lifecycle method
    const shouldUpdate = instance.shouldComponentUpdate({}, { count: 1});
    // if the state is not changed
    expect(shouldUpdate).toBe(false);
    wrapper.find('[id="counter"]').simulate('click');
     // if the state is changed
     const shouldUpdate2 = instance.shouldComponentUpdate({}, { count: 1});
     expect(shouldUpdate2).toBe(true);
  });
});
