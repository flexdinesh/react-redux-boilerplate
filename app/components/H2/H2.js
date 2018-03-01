import React from 'react';
import './style.scss';

/* eslint-disable react/prop-types, no-unused-vars */
const H2 = (props) => (
  <h2 {...props}>{props.children}</h2>
);

export default H2;
