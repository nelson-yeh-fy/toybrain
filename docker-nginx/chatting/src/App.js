import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to dockerized board</h2>
        </div>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <MessageBoard />
        </div>
      </div>
    );
  }
}

class MessageBoard extends Component {
  constructor() {
    super();
    this.state = {
      showComments: true,
      items: [{text:"Dispatching unit 0310, 0311 to CFS2017-00123", key:"0123456879"}]
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App-MsgListMain">
        <div className="header">
          <form onSubmit={this._handleSubmit}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter task">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }

  _handleSubmit(e) {
    e.preventDefault(); //prevent page reload when click the submit button
    let itemArray = this.state.items;
    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );
    this.setState({
      items: itemArray
    });
    this._inputElement.value = "";    
  }
}

class TodoItems extends Component {
  render() {
    let todoEntries = this.props.entries;
    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }
    let listItems = todoEntries.map(createTasks);

    return (
      <div>
        <ul className="theList">
          {listItems}
        </ul>
      </div>
    );
  }
}

// var TodoItems = React.createClass({
//   render: function () {
//     var todoEntries = this.props.entries;

//     function createTasks(item) {
//       return <li key={item.key}>{item.text}</li>
//     }

//     var listItems = todoEntries.map(createTasks);

//     return (
//       <ul className="theList">
//         {listItems}
//       </ul>
//     );
//   }
// });


export default App;
