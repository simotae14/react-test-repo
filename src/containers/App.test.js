import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

// Create the mock store
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

let wrapper, store;
beforeEach(() => {
  const initialState = {
    count: 1
  };
  store = mockStore(initialState);
  // Shallow render the container passing in the mock store
  wrapper = shallow(
      <App store={store} />
  );
});

describe('test the App component', () => {
  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});