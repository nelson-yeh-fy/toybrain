import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import Home from './Home';
import Counter from './Counter';
import About from '../About';
import CFSLog from './CFSLog';
import CFSInfo from './enhancedCFSInfo';
import CFSList from './enhancedCFSList';
import Scientist from './enhancedScientist';

// const App = () => (
//   <div>
//     Undersconstasjfkls
//   </div>
// );

const App = ({ userId, onClick }) => (
  <div>
    {!userId
      ? <div>
        <h1>HOME</h1>
        { /*  all 3 "links" dispatch actions: */ }
        <Link to="/user/123">User 123</Link>  { /* action updates location state + changes address bar */ }
        <Link to={{ type: 'USER', payload: { id: 456 } }}>User 456</Link> { /* so does this */ }
        <span onClick={onClick}>User 5</span>  { /* so does this, but without SEO benefits */ }
      </div>

      : <h1>USER: {userId}</h1> // press the browser BACK button to go HOME :)
    }
  </div>
);

const mapStateToProps = ({ userId }) => ({ userId });
const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch({ type: 'USER', payload: { id: 5 } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);



// const CFSinformation = (match, props) => (
//   <div>
//     {console.log(props.match.params.cfsId)}
//     <h2>CFSinformation</h2>
//     <h3>{match.id}</h3>
//     <ul>
//       <Link to={`${match.url}/related`}>Related</Link>
//     </ul>
//     <ul>
//       <Link to={`${match.url}/ticket`}>ticket</Link>
//     </ul>

//     <Route path={`${match.url}/:related`} component={() => <h4>{match.params.id} related</h4>} />
//     <Route path={`${match.url}/:ticket`} component={() => <h4>{match.params.id}ticket</h4>} />
//   </div>
// );

// <Route path="/roster" component={Roster} />
// <Route path="/CFSLog" component={CFSLog} />
// <Route path="/CFSLog/(:filter)" component={CFSLog} />
// <Route
// path="/CFS"
// component={() => (
//   <div>
//     <h2>CFS</h2>
//     <Route exact path="/CFS" component={CFSList} />
//     <Route path="/CFS/:cfsId" component={CFSInfo} />
//   </div>
// )}
// />
