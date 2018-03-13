import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Comment, Form, Button, Input, Divider, Icon } from 'semantic-ui-react';
import CfsLog from '../components/CfsInfo/CfsLog';
import {
  refreshCFSLog,
  refreshCFSLogAsync,
  appendCFSLog,
  appendCFSLogAsync,
} from '../reducers/cfsLog';
import '../assets/App.css';

let inputVal = '';

const getVisibleCfsLogArticles = (cfsLogArticles, filter) => {
  switch (filter) {
    case 1:// 'SHOW_SYSTEMTEXTONLY':
      return cfsLogArticles.filter(t => !t.isUserComment);
    case 2:// 'SHOW_USERTEXTONLY':
      return cfsLogArticles.filter(t => !t.isUserComment);
    case 4:// 'SHOW_TONEONLY':
      return cfsLogArticles.filter(t => !t.isUserComment);
    case 7:// 'SHOW_ALL':
      return cfsLogArticles.filter(t => t.isUserComment);
    default:
      return cfsLogArticles;
  }
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
            onClick={props.refreshCFSLogAsync}
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
          {props.cfsLogArticles.map(x => CfsLog(x))}
        </Comment.Group>
      </div>
      <Divider />
      <Form onSubmit={() => {
        if (inputVal !== '') {
          props.appendCFSLogAsync({
            id: Date.now(),
            type: 2,
            text: inputVal,
            addby: 'UserName',
            addon: new Date(Date.now()).toLocaleString(),
          });
        }
      }}
      >
        <Form.Group widths="equal">
          <Form.Field
            onChange={(e) => { inputVal = e.target.value; }}
            control={Input}
            placeholder="Enter more comments..."
          />
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
  cfsLogArticles: PropTypes.arrayOf(PropTypes.shape({
    idx: PropTypes.number,
    isUserComment: PropTypes.bool,
    text: PropTypes.string,
    addby: PropTypes.string,
    addon: PropTypes.string,
  })).isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  isAdding: PropTypes.bool.isRequired,
  refreshCFSLog: PropTypes.func.isRequired,
  refreshCFSLogAsync: PropTypes.func.isRequired,
  appendCFSLog: PropTypes.func.isRequired,
  appendCFSLogAsync: PropTypes.func.isRequired,
};

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = state => ({
  cfsLogArticles: getVisibleCfsLogArticles(state.cfsLog.logArticles, state.cfsLogStatus.listFilter),
  // 'isRefreshing' means one of CFSInfo.js's prop;
  // 'state.cfsLogListStatus.isRefreshing' means store (createStore via rootReducer)'s isRefreshing variable
  isRefreshing: state.cfsLogStatus.isRefreshing,
  isAdding: state.cfsLogStatus.isAdding,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  refreshCFSLog,
  refreshCFSLogAsync,
  appendCFSLog,
  appendCFSLogAsync,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CfsInfo);
