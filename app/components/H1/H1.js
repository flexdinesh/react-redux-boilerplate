import React from 'react';
import './style.scss';

/* eslint-disable react/prop-types, no-unused-vars */
const H1 = (props) => (
  <h1 {...props}>{props.children}</h1>
);

export default H1;
