import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
  console.log(shallow(<Card />).debug());
  expect(shallow(<Card />)).toMatchSnapshot();
})