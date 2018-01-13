import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as mdtActionCreators from '../actions/mdt';

import MdtControlBar from '../components/mdtControlBar';
import MdtCfsBrief from '../components/mdtCfsBrief';
import MdtCfsInfo from '../components/mdtCfsInfo';

import './../css/main.css';

class MdtContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App-mdtframe skin-blue sidebar-mini control-sidebar-open night-body">
                <MdtControlBar />
                <MdtCfsBrief />
                <MdtCfsInfo />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        timeEvents: state.timeEvents, // timeEvents means TimeEventList's prop, state.timeEvent means rootReducer.timeEvent
        mdtEvent: state.mdtshow,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(mdtActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MdtContainer);
