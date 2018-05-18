import React from 'react';

const Scientist = ({ isVisible, toogleVisibility, title, message }) => (
  <div>
    <h1>{title}</h1>
    {isVisible ? <p>I'm visible</p> : <p> Not Visible </p>}
    <p>{message}</p>
    <button onClick={toogleVisibility}> Click me! </button>
  </div>
);

export default Scientist;
