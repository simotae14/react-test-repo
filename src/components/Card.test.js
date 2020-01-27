import { shallow, render, mount } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
  console.log(shallow(<Card />));
  expect(shallow(<Card />).length).toEqual(1);
})