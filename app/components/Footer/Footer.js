import React from 'react';

import A from 'components/A';
import './style.scss';

const Footer = () => (
  <footer>
    <section>This project is licensed under the MIT license.</section>
    <section>Made with love by {<A href="https://twitter.com/mxstbr">Max Stoiber</A>}</section>
  </footer>
);

export default Footer;
