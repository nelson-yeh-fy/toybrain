import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import './../css/main.css';
import AddTimeEvent from './addTimeEvent';

class TimeEventList extends Component {
    static propTypes = {
        // https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/
        addTimeEventAction: React.PropTypes.func.isRequired,
        setDisplayTimeEventAction: React.PropTypes.func.isRequired,
        setDisplayUserCommentOnlyAction: React.PropTypes.func.isRequired,
        timeEvents: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                idx: React.PropTypes.number,
                isUserComment: React.PropTypes.bool,
                text: React.PropTypes.string,
                addby: React.PropTypes.string,
                addon: React.PropTypes.string
            })).isRequired,
        isUserCommentFiltered: React.PropTypes.bool.isRequired,
        isLoading: React.PropTypes.bool.isRequired,
        hasError: React.PropTypes.bool.isRequired
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

        function getVisibleTimeEvents(items, filter) {
            switch (filter) {
                case true:
                    return items.filter(item => item.isUserComment);
                default:
                    return items;
            }
        }

        const filteredItems = getVisibleTimeEvents(this.props.timeEvents, this.props.isUserCommentFiltered);
        const listItems = filteredItems.map(createTimeEventLogs);

        return (
            <aside className="control-sidebar control-sidebar-open" id="divCallLogPanel">
                <div className="box box-calllog">
                    <div className="calllog-extrude">
                        <a href="#" data-toggle="control-sidebar" id="calllogLink" onClick={() => this.props.setDisplayTimeEventAction(false)}>
                            <i className="fa icon-mdt_collapse_toright" id="extrudeIcon" />
                        </a>
                    </div>
                    <div className="box-header box-calllog" id="timeEventHeader">
                        <span className="" id="timeEventTile">CFS Time Event</span>
                        <span id="timeCfsNo" />
                    </div>
                    <div className="box-calllog" style={{ marginTop: 0 }}>
                        <div id="timeEventBtns">
                            <ButtonGroup className="time-event" justified>
                                <Button className="btn logFilterBtn logFilterBtnActive" active onClick={() => this.props.setDisplayUserCommentOnlyAction(false)}>ALL</Button>
                                <Button className="btn logFilterBtn" onClick={() => this.props.setDisplayUserCommentOnlyAction(true)}>TEXT ONLY</Button>
                            </ButtonGroup>
                            <div id="divCallLogContent" style={{ height: 300 }}>
                                <ul className="timeline" id="cfsLog1">{listItems}</ul>
                            </div>
                        </div>
                    </div>
                    <div className="box-footer box-calllog" id="callLogFooter">
                        <AddTimeEvent onSubmit={this.props.addTimeEventAction} />
                    </div>
                </div>
            </aside>
        );
    }
}

export default TimeEventList;
