
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddTimeEvent extends Component {
    static propTypes = {
        handleSubmit: React.PropTypes.func.isRequired, // this function is provided by redux-form
        pristine: React.PropTypes.bool.isRequired, // this function is provided by redux-form
        reset: React.PropTypes.func.isRequired, // this function is provided by redux-form
        submitting: React.PropTypes.bool.isRequired // this function is provided by redux-form
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{ color: 'white' }}>Add by:</label>
                    <div>
                        <Field name="addby" component="input" type="text" placeholder="User Name..." />
                    </div>
                    <label style={{ color: 'white' }} htmlFor="showComments">User comments:</label>
                    <Field name="isUserComment" id="isUserComment"  component="input" type="checkbox" value="false" />
                </div>
                <div>
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
