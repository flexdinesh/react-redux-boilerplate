import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import RepoListItem from './RepoListItem';

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser()
  })
)(RepoListItem);
