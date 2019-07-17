import React from 'react';
import Loadable from 'react-loadable';
import Loading from './loading';

const LoadableContact = Loadable({
  loader: () => import(/* webpackChunkName: "cssr-contact" */ './contact'),
  loading: Loading,
  delay: 500
});

class Toggle extends React.Component {
  state = {
    openHello: false
  };

  handleHello = () => {
    // eslint-disable-next-line react/destructuring-assignment, react/no-access-state-in-setstate
    this.setState({ openHello: !this.state.openHello });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleHello}>
          Toggle Component
        </button>

        {// eslint-disable-next-line react/destructuring-assignment, react/no-access-state-in-setstate
        this.state.openHello ? <LoadableContact /> : null}
      </div>
    );
  }
}

export default Toggle;
