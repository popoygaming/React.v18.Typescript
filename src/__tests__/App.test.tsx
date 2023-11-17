import React from 'react';
import { render, screen} from '@testing-library/react';
import App from '../App';
import Home from '../pages/Home';
import renderer from 'react-test-renderer';

it('performs snapshot testing', () => {
  // const tree = renderer.create(<Home />).toJSON();
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});