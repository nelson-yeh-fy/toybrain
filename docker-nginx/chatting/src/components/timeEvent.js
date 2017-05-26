import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as timeEventActionCreators from '../actions/timeEvent';
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
                eventTime: React.PropTypes.string
            })).isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        function createTasks(item) {
            return (
                <li className="fa fa-clock-o bg-gray" key={item.idx}>
                    <i>
                        <div className="timeline-item">
                            <span className="time">{item.eventTime}</span>
                            <h3 className="timeline-header">by Tony</h3>
                        </div>
                        <div className="timeline-body">
                            {item.text}
                        </div>
                    </i>
                </li>
            );
        }
        const listItems = this.props.timeEvents.map(createTasks);
        //   Alternative:
        //   const listItems = this.props.todo.map((item) => {
        //       return <li key={item.idx}>{item.text}</li>;
        //   });

        return (
            <div className="box box-calllog">
                <div className="calllog-extrude">
                    <a href="#" data-toggle="control-sidebar" id="calllogLink">
                        <i className="fa icon-mdt_collapse_toright" id="extrudeIcon"></i>
                    </a>
                </div>
                <div className="box-header box-calllog" id="timeEventHeader">
                    <span id="timeEventTile" className="">
                        CFS Time Event
                    </span>
                </div>
                <div className="box-calllog" style={{marginTop: 0}}>
                    <div id="timeEventBtns">
                        <div className="btn-group time-event">
                            <button tabIndex={-1} className="col-sm-6 btn logFilterBtn logFilterBtnActive">ALL</button>
                            <button tabIndex={-1} className="col-sm-6 btn logFilterBtn">TEXT ONLY</button>
                        </div>
                    </div>
                    <div id="divCallLogContent">
                        <ul className="timeline" id="cfsLog1">{listItems}</ul>
                    </div>
                </div>
                <div id="callLogFooter" className="box-footer box-calllog">
                    <div className="form-group-sm">
                        <AddTimeEvent addItemProp={this.props.actions.addToTimeEvent} />
                    </div>
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
