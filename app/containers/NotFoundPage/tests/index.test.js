/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../index';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(<NotFound />);
    expect(renderedComponent.contains(<h1>Page not found.</h1>)).toEqual(true);
  });
});
