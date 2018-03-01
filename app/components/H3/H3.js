import React from 'react';

import './style.scss';

/* eslint-disable react/prop-types */
const H3 = (props) => (
  <h3 {...props}>{props.children}</h3>
);

export default H3;
