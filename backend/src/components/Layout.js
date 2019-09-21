import React, { Fragment } from 'react';
import Nav from './Nav';

const Layout = (props) => {
  return (
    <Fragment>
      <Nav />
      <main role="main" className="container">{props.children}</main>
    </Fragment>
  )
}

export default Layout;