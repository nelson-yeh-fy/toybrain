import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Button, Divider, Comment, Input, Form } from 'semantic-ui-react';
import CfsLogItem from './cfsLogItem';
import '../../assets/App.css';

let inputVal = '';

const CfsLog = ({
  varCfsLogArticles,
  varIsRefreshing,
  varIsAdding,
  varIsSysTextChkBoxChecked,
  varIsUsrTextChkBoxChecked,
  varIsToneChkBoxChecked,
  funcRefreshCFSLogAsync,
  funcAppendCFSLogAsync,
  funcShowCFSLogSystemText,
  funcShowCFSLogUserText,
  funcShowCFSLogTone,
}) => (
  <Container>
    <Segment color="blue" >
      <div className="cfs-title">CFS Logs:
        <label>
          <input
            type="checkbox"
            id="myCheckBox_SystemText"
            value="System Text"
            checked={varIsSysTextChkBoxChecked}
            onChange={() => { funcShowCFSLogSystemText(!varIsSysTextChkBoxChecked); }}
          />
          System Text
        </label>
        <label>
          <input
            type="checkbox"
            id="myCheckBox_UserText"
            value="User Text"
            checked={varIsUsrTextChkBoxChecked}
            onChange={() => { funcShowCFSLogUserText(!varIsUsrTextChkBoxChecked); }}
          />
          User Text
        </label>
        <label>
          <input
            type="checkbox"
            id="myCheckBox_Tone"
            value="Tone"
            checked={varIsToneChkBoxChecked}
            onChange={() => { funcShowCFSLogTone(!varIsToneChkBoxChecked); }}
          />
          Tone
        </label>
        <Button
          onClick={funcRefreshCFSLogAsync}
          disabled={varIsRefreshing}
          size="mini"
          floated="right"
          icon="refresh"
          primary
        />
      </div>
    </Segment>
    <div className="cfs-timeEvent">
      <Comment.Group style={{ maxWidth: 'none' }} >
        {varCfsLogArticles.map(x => CfsLogItem(x))}
      </Comment.Group>
    </div>
    <Divider />
    <Form onSubmit={() => {
  if (inputVal !== '') {
    funcAppendCFSLogAsync({
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
          disabled={varIsAdding}
          content="Add"
          labelPosition="right"
          icon="edit"
          primary
        />
      </Form.Group>
    </Form>
  </Container>
);

CfsLog.propTypes = {
  varCfsLogArticles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.number,
    text: PropTypes.string,
    addby: PropTypes.string,
    addon: PropTypes.string,
  })).isRequired,
  varIsRefreshing: PropTypes.bool.isRequired,
  varIsAdding: PropTypes.bool.isRequired,
  varIsSysTextChkBoxChecked: PropTypes.bool.isRequired,
  varIsUsrTextChkBoxChecked: PropTypes.bool.isRequired,
  varIsToneChkBoxChecked: PropTypes.bool.isRequired,
  funcRefreshCFSLogAsync: PropTypes.func.isRequired,
  funcAppendCFSLogAsync: PropTypes.func.isRequired,
  funcShowCFSLogSystemText: PropTypes.func.isRequired,
  funcShowCFSLogUserText: PropTypes.func.isRequired,
  funcShowCFSLogTone: PropTypes.func.isRequired,
};

export default CfsLog;

