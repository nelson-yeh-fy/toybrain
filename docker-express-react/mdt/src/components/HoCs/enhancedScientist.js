import React from 'react';
import { compose, withReducer, withProps, branch, renderComponent } from 'recompose';
import Scientist from '../HoCs/Scientist';

const NowLoading = () => (
  <div>now loading</div>
);

export default compose(
  // withState('isVisible', 'setVisibility', false),
  // withHandlers({
  //   toogleVisibility: ({ setVisibility }) => () =>
  //     setVisibility(isVisible => !isVisible),
  // }),
  withReducer('isVisible', 'toogleVisibility', isVisible => !isVisible, false),
  withProps(({ isVisible }) => {
    return {
      title: isVisible ? 'This is the visible title' : 'This is the default title',
      message: isVisible ? 'Hello I am Visible' : 'I am not visible yet, click the button!',
    };
  }),
  branch(
    () => 1 === 1,
    renderComponent(Scientist),
    renderComponent(NowLoading),
  ),
)(Scientist);
