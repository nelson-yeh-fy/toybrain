import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Nav } from 'react-bootstrap';
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
            <Grid className="App-mdtframe night-body">
                <Row>
                </Row>
                <Row className="CfsBrief">
                    <MdtCfsBrief />
                </Row>
                <Row>
                {/*
                    <MdtControlBar className="skin-blue sidebar-mini control-sidebar-open"/>
                    <MdtCfsInfo />*/}
                </Row>
            </Grid>
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
