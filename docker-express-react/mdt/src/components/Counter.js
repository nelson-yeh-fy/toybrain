import React from 'react';
import PropTypes from 'prop-types';
/* import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../reducers/counter';

const Counter = (props) => {
  let items = [];
  for (let i = 1; i < props.count; i++) { items.push(<div key={i}>{i}</div>); }

  return (
    <div>
      <p>Count: {props.count}</p>

      <p>
        <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
        <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
          Increment Async
        </button>
      </p>

      <p>
        <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
        <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
          Decrement Async
        </button>
      </p>

      { /*
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <h1>Fading at Initial Mount</h1>
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>

      <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
      */ }
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  isIncrementing: PropTypes.bool.isRequired,
  isDecrementing: PropTypes.bool.isRequired,
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  // changePage: PropTypes.func.isRequired,
};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({
  // 'count' means one of Counter.js's prop;
  // 'state.counter.count' means store (createStore via rootReducer)'s counter
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

// Take function 'dispatch' as an argument,
// this causes our actions to be sent toward store (via reducers)
const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  // changePage: () => push('/About'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
