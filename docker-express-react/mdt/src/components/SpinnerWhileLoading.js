import React from 'react';
import { branch, renderComponent } from 'recompose';

const NowLoading = () => (
  <div>now loading</div>
);

// `hasLoaded()` is a function that returns whether or not the the component
// has all the props it needs
const identity = t => t;

const SpinnerWhileLoading = hasLoaded => (
  branch(
    hasLoaded,
    identity, // Component => Component
    renderComponent(NowLoading), // <NowLoading> is a React component
  )
);

export default SpinnerWhileLoading;
