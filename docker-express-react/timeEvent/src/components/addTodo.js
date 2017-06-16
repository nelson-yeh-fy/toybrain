
import React, { Component } from 'react';

class AddTodo extends Component {
    static propTypes = {
        addItemProp: React.PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(e) {
        e.preventDefault(); // prevent page reload when click the submit button
        const item = {
            idx: Date.now(),
            showComments: true,
            done: true,
            text: this._inputElement.value
        };
        this.props.addItemProp(item);
        this._inputElement.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onHandleSubmit}>
                <input ref={(a) => this._inputElement = a} placeholder="Enter task" />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default AddTodo;
