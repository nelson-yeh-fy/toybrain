import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Comment, Form, Button, Input, Divider, Icon, Checkbox, Segment } from 'semantic-ui-react';
import cfsAbstract from '../components/cfsAbstract';
import cfsLog from '../components/cfsInfo/cfsLog';
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

const CFSInfo = props => (
  <Container>
    <cfsAbstract />
    <Segment color="blue">
      <p className="cfs-title"> CFS Description: </p>
    </Segment>
    <p className="cfs-description">
      {`A fire started behind the pizza oven and is getting worse.
          One employee is stuck in bathroom. Propane Tanks in Basement.
          A fire started behind the pizza oven and is getting worse.
          One employee is stuck in bathroom.
          A fire started behind the pizza oven and is getting worse.
          One employee is stuck in bathroom. Propane Tanks in Basement.
          A fire started behind the pizza oven and is getting worse.
          One employee is stuck in bathroom.`}
    </p>
    <Divider />
    <Segment color="blue" >
      <div className="cfs-title">CFS Logs:
        <Checkbox label="System Text" className="margin-left-14" />
        <Checkbox label="User Text" className="margin-left-14" />
        <Checkbox label="Tone" className="margin-left-14" />
        <Button
          onClick={props.refreshCFSLogAsync}
          disabled={props.isRefreshing}
          size="mini"
          floated="right"
          icon
          primary
        >
          <Icon name="refresh" />
        </Button>
      </div>
    </Segment>
    <div className="cfs-timeEvent">
      <Comment.Group style={{ maxWidth: 'none' }} >
        {props.cfsLogArticles.map(x => cfsLog(x))}
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

  </Container>
);


CFSInfo.propTypes = {
  cfsLogArticles: PropTypes.arrayOf(PropTypes.shape({
    idx: PropTypes.number,
    isUserComment: PropTypes.bool,
    text: PropTypes.string,
    addby: PropTypes.string,
    addon: PropTypes.string,
  })).isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  isAdding: PropTypes.bool.isRequired,
  refreshCFSLogAsync: PropTypes.func.isRequired,
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
)(CFSInfo);
