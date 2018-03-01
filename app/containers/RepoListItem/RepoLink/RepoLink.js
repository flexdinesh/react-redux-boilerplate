import React from 'react';
import NormalA from 'components/A';

import './RepoLink.style.scss';

/* eslint-disable react/prop-types, no-unused-vars */
const RepoLink = (props) => (
  <NormalA className="repo-link" {...props}>{props.children}</NormalA>
);

export default RepoLink;
