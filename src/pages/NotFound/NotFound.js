import React from 'react';

const NotFound = ({location}) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">404 Error</h1>
          <h2 className="subtitle">The page <strong>{location.pathname} </strong> does not exist.</h2>
        </div>
      </div>
    </section>
  )
}

export default NotFound;
