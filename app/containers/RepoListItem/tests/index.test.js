/**
 * Test the repo list item
 */

import React from 'react';
import { shallow, render } from 'enzyme';

import ListItem from 'components/ListItem';
import RepoListItem from '../RepoListItem';

const renderComponent = (props = {}) => render(<RepoListItem {...props} />);

describe.only('<RepoListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      owner: {
        login: 'flexdinesh'
      },
      html_url: 'https://github.com/flexdinesh/react-redux-boilerplate',
      name: 'react-redux-boilerplate',
      open_issues_count: 20,
      full_name: 'flexdinesh/react-redux-boilerplate'
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(<RepoListItem item={item} />);
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });

  it('should not render the current username', () => {
    const renderedComponent = renderComponent({
      item,
      currentUser: item.owner.login
    });
    expect(renderedComponent.text()).not.toContain(item.owner.login);
  });

  it('should render usernames that are not the current one', () => {
    const renderedComponent = renderComponent({
      item,
      currentUser: 'nikgraf'
    });
    expect(renderedComponent.text()).toContain(item.owner.login);
  });

  it('should render the repo name', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.name);
  });

  it('should render the issue count', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.open_issues_count);
  });

  it('should render the IssueIcon', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.find('svg').length).toBe(1);
  });
});
