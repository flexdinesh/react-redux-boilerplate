import React from 'react';
import NormalA from 'components/A';

import './IssueLink.style.scss';

/* eslint-disable react/prop-types, no-unused-vars */
const IssueLink = (props) => (
  <NormalA className="issue-link" {...props}>{props.children}</NormalA>
);

export default IssueLink;
