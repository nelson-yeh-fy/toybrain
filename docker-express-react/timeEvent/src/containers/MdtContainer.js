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
                <Nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Navbar</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    </Nav>
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
