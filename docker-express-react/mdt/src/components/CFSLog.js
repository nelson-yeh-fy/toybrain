import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Button, Divider, Comment, Input, Form } from 'semantic-ui-react';
import CFSLogItem from './CFSLogItem';
import * as commonPropTypes from '../constants/propsTypes';
import '../assets/App.css';

let inputVal = '';

const CFSLog = ({
  cfsLogArticles,
  isRefreshing,
  isAdding,
  isSysTextChkBoxChecked,
  isUsrTextChkBoxChecked,
  isToneChkBoxChecked,
  refreshCFSLogAsync,
  appendCFSLogAsync,
  showCFSLogSystemText,
  showCFSLogUserText,
  showCFSLogTone,
}) => (
  <Container>
    <Segment color="blue" >
      <div className="cfs-title">CFS Logs:
        <label>
          <input
            type="checkbox"
            id="myCheckBox_SystemText"
            value="System Text"
            checked={isSysTextChkBoxChecked}
            onChange={() => { showCFSLogSystemText(!isSysTextChkBoxChecked); }}
          />
          System Text
        </label>
        <label>
          <input
            type="checkbox"
            id="myCheckBox_UserText"
            value="User Text"
            checked={isUsrTextChkBoxChecked}
            onChange={() => { showCFSLogUserText(!isUsrTextChkBoxChecked); }}
          />
          User Text
        </label>
        <label>
          <input
            type="checkbox"
            id="myCheckBox_Tone"
            value="Tone"
            checked={isToneChkBoxChecked}
            onChange={() => { showCFSLogTone(!isToneChkBoxChecked); }}
          />
          Tone
        </label>
        <Button
          onClick={refreshCFSLogAsync}
          disabled={isRefreshing}
          size="mini"
          floated="right"
          icon="refresh"
          primary
        />
      </div>
    </Segment>
    <div className="cfs-timeEvent">
      <Comment.Group style={{ maxWidth: 'none' }} >
        {cfsLogArticles.map(x => CFSLogItem(x))}
      </Comment.Group>
    </div>
    <Divider />
    <Form onSubmit={() => {
  if (inputVal !== '') {
    appendCFSLogAsync({
      id: Date.now(),
      type: 2,
      text: inputVal,
      addby: 'UserName',
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
          disabled={isAdding}
          content="Add"
          labelPosition="right"
          icon="edit"
          primary
        />
      </Form.Group>
    </Form>
  </Container>
);

CFSLog.propTypes = {
  ...commonPropTypes.CFSLogPropType,
  isRefreshing: PropTypes.bool.isRequired,
  isAdding: PropTypes.bool.isRequired,
  isSysTextChkBoxChecked: PropTypes.bool.isRequired,
  isUsrTextChkBoxChecked: PropTypes.bool.isRequired,
  isToneChkBoxChecked: PropTypes.bool.isRequired,
  refreshCFSLogAsync: PropTypes.func.isRequired,
  appendCFSLogAsync: PropTypes.func.isRequired,
  showCFSLogSystemText: PropTypes.func.isRequired,
  showCFSLogUserText: PropTypes.func.isRequired,
  showCFSLogTone: PropTypes.func.isRequired,
};

export default CFSLog;
