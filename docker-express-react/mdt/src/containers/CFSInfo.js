import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Comment, Form, Button, Input, Divider, Icon } from 'semantic-ui-react';
import cfsLog from '../component/cfsLog';
import * as actionCreators from '../actionCreators/cfsLog';
import '../assets/App.css';

let newTimeEvent = {
  idx: Date.now(),
  isUserComment: true,
  text: 'abc',
  addby: 'sys',
  addon: '2018-10-22',
};

const CfsInfo = props => (
  <Container>
    <div className="cfs-info">
      <span className="title"> Description: </span>
      <div className="desc">
        <p> A fire started behind the pizza oven and is getting worse.
            One employee is stuck in bathroom. Propane Tanks in Basement.
            A fire started behind the pizza oven and is getting worse.
            One employee is stuck in bathroom.
            Propane Tanks in Basement. Anim pariatur cliche reprehenderit
        </p>
      </div>
    </div>
    <Divider />
    {
      // CFS TimeEvent Area, expandable and collapsable
    }
    <div className="cfs-info">
      <span className="title"> Time Event:
        <span className="float-right">
          <Button
            onClick={props.actions.refreshCFSLogAsync}
            disabled={props.isRefreshing}
            size="mini"
            icon
            primary
          >
            <Icon name="refresh" />
          </Button>
        </span>
      </span>
      <div className="timeEvent">
        <Comment.Group>
          {props.timeEventLogs.map(x => cfsLog(x))}
        </Comment.Group>
      </div>
      <Divider />
      <Form>
        <Form.Group widths="equal">
          <Form.Field control={Input} placeholder="Enter more comments..." />
          <Form.Button
            disabled={props.isAdding}
            content="Add"
            labelPosition="right"
            icon="edit"
            primary
          />
        </Form.Group>
      </Form>
    </div>
  </Container>
);

// onClick={props.actions.appendCFSLog(newTimeEvent)}
CfsInfo.propTypes = {
  timeEventLogs: PropTypes.arrayOf(PropTypes.shape({
    idx: PropTypes.number,
    isUserComment: PropTypes.bool,
    text: PropTypes.string,
    addby: PropTypes.string,
    addon: PropTypes.string,
  })).isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  isAdding: PropTypes.bool.isRequired,
  // refreshCFSLog: PropTypes.func.isRequired,
  // refreshCFSLogAsync: PropTypes.func.isRequired,
  // appendCFSLog: PropTypes.func.isRequired,
  // appendCFSLogAsync: PropTypes.func.isRequired,
};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({
  ...state.cfsLog,
  // // 'timeEventLogs' means one of CFSInfo.js's prop;
  // // 'state.counter.count' means store (createStore via rootReducer)'s counter
  // timeEventLogs: state.cfsLog.timeEventLogs,
  // isRefreshing: state.cfsLog.isRefreshing,
  // isAdding: state.cfsLog.isAdding,
});

// Take function 'dispatch' as an argument,
// this causes our actions to be sent toward store (via reducers)
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CfsInfo);
