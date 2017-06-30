
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddTimeEvent extends Component {
    static propTypes = {
        handleSubmit: React.PropTypes.func.isRequired, // this function is provided by redux-form
        pristine: React.PropTypes.func.isRequired, // this function is provided by redux-form
        reset: React.PropTypes.func.isRequired, // this function is provided by redux-form
        submitting: React.PropTypes.func.isRequired // this function is provided by redux-form
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add by</label>
                    <div>
                        <Field name="addby" component="input" type="text" placeholder="Nelson" />
                    </div>
                </div>
                <div>
                    <label>text</label>
                    <div>
                        <Field name="text" component="textarea" placeholder="Enter time event..." className="input-sm box-calllog" rows={4} cols={20} />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        );
    }
}

const DecoratedAddTimeEvent = reduxForm({
    form: 'AddTimeEvent' // a unique name for this form
})(AddTimeEvent);

export default DecoratedAddTimeEvent;
