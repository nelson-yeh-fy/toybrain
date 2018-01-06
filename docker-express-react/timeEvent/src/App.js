import React, { Component } from 'react';
import logo from './logo.svg';
import './css/main.css';

import Cart from './components/cart';
import Todo from './components/todo';
import TimeEventContainer from './containers/timeEventContainer';
import MdtContainer from './containers/MdtContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Welcome to dockerized board</h3>
                </div>
                <div>
                    <MdtContainer />
                </div>
                <div className="App-intro" id="scrollbar-style-5">
                    <Todo />
                    <Cart />
                </div>
                <div>
                    <TimeEventContainer />
                </div>
            </div>
        );
    }
}

export default App;
