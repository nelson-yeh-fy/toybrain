
import React, { Component } from 'react';
import moment from 'moment';

class AddTimeEvent extends Component {
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
            text: this._inputElement.value,
            eventTime: moment().calendar()
        };
        this.props.addItemProp(item);
        this._inputElement.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onHandleSubmit}>
                <input ref={(a) => this._inputElement = a} placeholder="Enter time event..." />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default AddTimeEvent;
