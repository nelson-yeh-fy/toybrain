import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import Home from './Home';
import Counter from './Counter';
import About from '../About';
import CFSLog from './enhancedCFSLog';
import CFSInfo from './enhancedCFSInfo';
import CFSList from './enhancedCFSList';
import Scientist from './enhancedScientist';

const Footer = () => (<div>Footer</div>);

const App = ({ routingType, routingId, onClick }) => {
  let DisplayPage = null;
  switch (routingType) {
    case 'CFSList':
      DisplayPage = () => (<div><h3>CFSList</h3><CFSList /></div>);
      break;
    case 'CFS':
      DisplayPage = () => (<div><CFSInfo /><CFSLog /></div>);
      break;
    case 'COUNTER':
      DisplayPage = () => (<div><header>COUNTER: {routingId}</header><main><Counter /></main></div>);
      break;
    case 'USER':
      DisplayPage = () => (<div>USER: {routingId}</div>);
      break;
    case 'HOME':
    default:
      DisplayPage = () => (<div>Home</div>);
      break;
  }

  return (
    <div>
      <header>
        <Link to="/user/123">User 123 </Link>  { /* action updates location state + changes address bar */ }
        <Link to={{ type: 'USER', payload: { id: 456 } }}>User 456 </Link> { /* so does this */ }
        <span onClick={onClick}>User 5 </span>  { /* so does this, but without SEO benefits */ }
        <Link to={{ type: 'CFSList' }}>CFSList </Link>
        <Link to={{ type: 'COUNTER' }}>Counter </Link>
      </header>
      <DisplayPage />
      <Footer />
    </div>
  );
};

App.propTypes = {
  routingType: PropTypes.string.isRequired,
  routingId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

// const mapStateToProps = ({ userId }) => ({ userId });
const mapStateToProps = state => ({
  routingType: state.location.type,
  routingId: state.location.payload.id || -1,
});
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch({ type: 'USER', payload: { id: 5 } }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
