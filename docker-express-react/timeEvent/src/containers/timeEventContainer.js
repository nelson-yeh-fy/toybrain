import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as timeEventActionCreators from '../actions/timeEvent';
import 'whatwg-fetch';
import moment from 'moment';

import TimeEventList from '../components/timeEvent';

class TimeEventContainer extends Component {
    static propTypes = {
        // https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/
        actions: React.PropTypes.object.isRequired,
        timeEvents: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                idx: React.PropTypes.number,
                isUserComment: React.PropTypes.bool,
                text: React.PropTypes.string,
                addby: React.PropTypes.string,
                addon: React.PropTypes.string
            })).isRequired,
        isShowUserCommentOnly: React.PropTypes.bool.isRequired,
        isLoading: React.PropTypes.bool.isRequired,
        hasError: React.PropTypes.bool.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // this.fetchData('http://localhost:3001/users');
        // this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
        this.props.actions.fetchData('/api/timeEvents');
    }

    showResults = values =>
        new Promise(resolve => {
            setTimeout(() => { // simulate server latency
                console.log(values);

                const newTimeEvent = {
                    idx: Date.now(),
                    isUserComment: values.isUserComment,
                    text: values.text,
                    addby: values.addby,
                    addon: moment().calendar()
                };

                this.props.actions.addTimeEventToDB('/api/timeEvents', newTimeEvent);
                window.alert(`You submitted:\n\n${JSON.stringify(newTimeEvent, null, 2)}`);
                resolve();
            }, 1000);
        })

    render() {
        return (
            <TimeEventList timeEvents={this.props.timeEvents} addTimeEventAction={this.showResults} setDisplayUserCommentOnlyAction={this.props.actions.showUserCommentOnly}
                isUserCommentFiltered={this.props.isShowUserCommentOnly} isLoading={this.props.isLoading} hasError={this.props.hasError}
                />
        );
    }
}

function mapStateToProps(state) {
    return {
        timeEvents: state.timeEvents, // timeEvents means TimeEventList's prop, state.timeEvent means rootReducer.timeEvent
        isShowUserCommentOnly: state.timeEventShowsUserCommentOnly,
        isLoading: state.timeEventLoadingStatus,
        hasError: state.timeEventLoadingResult
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(timeEventActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeEventContainer);
