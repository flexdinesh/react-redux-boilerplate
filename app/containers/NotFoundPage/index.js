/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import H1 from 'components/H1';

export default function NotFound() {
  return (
    <article>
      <H1>Page not found.</H1>
    </article>
  );
}
