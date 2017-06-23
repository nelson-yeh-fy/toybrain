import React, { Component } from 'react';
import { Button, ButtonGroup, FormGroup } from 'react-bootstrap';

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
            })).isRequired,
        isLoading: React.PropTypes.bool,
        hasError: React.PropTypes.bool
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (this.props.hasError) {
            return (<div>
                <p>Sorry! There was an error loading the items</p>
            </div>
            );
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        function createTimeEventLogs(item) {
            return (
                <li className="time-label" key={item.idx}>
                    <i className="fa fa-clock-o bg-gray" />
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

export default TimeEventList;
