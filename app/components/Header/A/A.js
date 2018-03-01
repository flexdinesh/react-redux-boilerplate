import React from 'react';
import NormalA from 'components/A';

/* eslint-disable react/prop-types, no-unused-vars */
const A = (props) => (
  <NormalA className="header-a" {...props}>{props.children}</NormalA>
);

export default A;
