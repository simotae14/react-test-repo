import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';

it('expect to render ErrorBoundry component', () => {
  const wrapper = shallow(<ErrorBoundry />);
  expect(wrapper).toMatchSnapshot();
  const instance = wrapper.instance();
  // test the state value
  expect(instance.state.hasError).toBe(false);
  // force change state
  wrapper.setState({ hasError: true });
  // test the componentDidCatch
  instance.componentDidCatch('oh nooos an error', 'it is an error');
  // test the state value
  expect(instance.state.hasError).toBe(true);
})