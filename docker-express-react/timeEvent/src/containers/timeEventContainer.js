import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as timeEventActionCreators from '../actions/timeEvent';
import 'whatwg-fetch';

import TimeEventList from '../components/timeEvent';

class TimeEventContainer extends Component {
    static propTypes = {
        // https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/
        actions: React.PropTypes.object.isRequired,
        timeEvents: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                idx: React.PropTypes.number,
                showComments: React.PropTypes.bool,
                text: React.PropTypes.string,
                addby: React.PropTypes.string,
                addon: React.PropTypes.string
            })).isRequired,
        isLoading: React.PropTypes.bool,
        hasError: React.PropTypes.bool
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

    render() {
        return (
            <TimeEventList isLoading={this.props.isLoading} hasError={this.props.hasError} timeEvents={this.props.timeEvents} actions={this.props.actions}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        timeEvents: state.timeEvents, // timeEvents means TimeEventList's prop, state.timeEvent means rootReducer.timeEvent
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
