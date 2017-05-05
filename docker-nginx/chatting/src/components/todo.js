import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActionCreators from '../actions/todo';

import AddTodo from './addTodo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        function createTasks(item) {
            return <li key={item.idx}>{item.text}</li>
        }
        let listItems = this.props.todo.map(createTasks);
        //   Alternative:
        //   const listItems = this.props.todo.map((item) => {
        //       return <li key={item.idx}>{item.text}</li>;
        //   });

        return (
            <div className="App-MsgListMain">
                <div className="header">
                    <AddTodo addItemProp={this.props.actions.addToTodo} />
                </div>
                <ol>
                    {listItems}
                </ol>
            </div>
        );
    }
}


function mapStateToProps(state, props) {
    return {
        todo: state.todo //!! rootReducer.todo
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActionCreators, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);