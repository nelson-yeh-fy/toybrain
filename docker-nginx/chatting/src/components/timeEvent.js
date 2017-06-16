import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, ButtonGroup, FormGroup } from 'react-bootstrap';
import * as timeEventActionCreators from '../actions/timeEvent';
import 'whatwg-fetch';

import './../css/main.css';
import AddTimeEvent from './addTimeEvent';

class TimeEventList extends Component {
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
            })).isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            hasError: false
        };
    }

    componentDidMount() {
        // this.fetchData('http://localhost:3001/users');
        // this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
        this.fetchData('/timeEvent');
    }

    fetchData(url) {
        this.setState({ isLoading: true });
        fetch(url, {
            method: 'GET'
        })
            .then((response) => {
                if (!response.ok) {
                    console.log(response.status);
                    throw Error(response.statusText);
                }
                this.setState({ isLoading: false });
                return response.json();
            })
            // .then((items) => this.setState({ items }))
            .then((items) => this.props.actions.initializeTimeEvent(items))
            .catch((error) => { this.setState({ hasError: true }); console.log(error); }
            );
    }

    render() {
        if (this.state.hasError) {
            return (<div>
                <p>Sorry! There was an error loading the items</p>
            </div>
            );
        }
        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }

        function createTimeEventLogs(item) {
            return (
                <li className="time-label" key={item.idx}>
                    <i className="fa fa-clock-o bg-gray"></i>
                    <div className="timeline-item">
                        <span className="timeline-header"> {item.addby}</span>
                        <span className="timeline-body"> {item.text}</span>
                        <span>{item.addon}</span>
                    </div>
                </li>
            );
        }
        const listItems = this.props.timeEvents.map(createTimeEventLogs);

        return (
            <div className="box box-calllog">
                <div className="calllog-extrude">
                    <a href="#" data-toggle="control-sidebar" id="calllogLink">
                        <i className="fa icon-mdt_collapse_toright" id="extrudeIcon" />
                    </a>
                </div>
                <div className="box-header box-calllog" id="timeEventHeader">
                    <span className="" id="timeEventTile">CFS Time Event</span>
                    <span id="timeCfsNo" />
                    <i className="fa icon-mdt_maximize" id="btnExpandLog" />
                </div>
                <div className="box-calllog" style={{ marginTop: 0 }}>
                    <div id="timeEventBtns">
                        <ButtonGroup className="time-event" justified>
                            <Button className="btn logFilterBtn logFilterBtnActive" active>ALL</Button>
                            <Button className="btn logFilterBtn">TEXT ONLY</Button>
                        </ButtonGroup>
                        <div id="divCallLogContent" style={{ height: 300 }}>
                            <ul className="timeline" id="cfsLog1">{listItems}</ul>
                        </div>
                    </div>
                </div>
                <div className="box-footer box-calllog" id="callLogFooter">
                    <FormGroup bsSize="sm">
                        <AddTimeEvent addItemProp={this.props.actions.addToTimeEvent} />
                    </FormGroup>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        timeEvents: state.timeEvent // timeEvents means TimeEventList's prop, state.timeEvent means rootReducer.timeEvent
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(timeEventActionCreators, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TimeEventList);
