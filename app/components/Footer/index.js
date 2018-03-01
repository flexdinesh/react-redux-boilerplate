import React from 'react';

import A from 'components/A';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <section>This project is licensed under the MIT license.</section>
      <section>Made with love by {<A href="https://twitter.com/mxstbr">Max Stoiber</A>}</section>
    </Wrapper>
  );
}

export default Footer;
