import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Fragment>
      <div id='container-notfound'>
        <div class='content-notfound'>
          <h2>404</h2>
          <h4>Opps! Page not found</h4>
          <p>
            The page you were looking for doesn't exist. You may have mistyped
            the address or the page may have moved.
          </p>
          <Link to='/'>Back To Home</Link>
        </div>
      </div>
    </Fragment>
  );
};
