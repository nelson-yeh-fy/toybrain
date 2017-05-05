
import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(e) {
        e.preventDefault(); //prevent page reload when click the submit button
        let item = {
            idx: Date.now(),
            showComments: true,
            completed: true,
            text: this._inputElement.value
        }
        this.props.addItemProp(item);
        this._inputElement.value = "";
    }

    render() {
        return (
            <form onSubmit={this.onHandleSubmit}>
                <input ref={(a) => this._inputElement = a} placeholder="Enter task">
                </input>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default AddTodo;