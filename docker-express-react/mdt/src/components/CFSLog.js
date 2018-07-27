import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Segment, Button, Divider, Comment, Input, Form } from 'semantic-ui-react';
import CFSLogItem from './CFSLogItem';
import { CFSLogPropType } from '../constants/propsTypes';
import {
  refreshCFSLogAsync,
  appendCFSLogAsync,
} from '../reducers/cfsLog';
import {
  showCFSLogSystemText,
  showCFSLogUserText,
  showCFSLogTone,
} from '../reducers/cfsLogStatus';
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
  cfsLogArticles: CFSLogPropType.isRequired,
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


const getVisibleCfsLogArticles = (cfsLogArticles, listFilterMask) => {
  switch (listFilterMask) {
    case 0: // show nothing
      return cfsLogArticles.filter(t => t.type === 0);
    case 1: // show system text only
      return cfsLogArticles.filter(t => t.type === 1);
    case 2: // 'show user text only':
      return cfsLogArticles.filter(t => t.type === 2);
    case 3: // 'show system text + user text
      return cfsLogArticles.filter(t => t.type <= 3);
    case 4: // 'show tone only
      return cfsLogArticles.filter(t => t.type === 4);
    case 5: // 'show tone only
      return cfsLogArticles.filter(t => t.type === 1 || t.type === 4);
    case 6: // 'show tone only
      return cfsLogArticles.filter(t => t.type === 2 || t.type === 4);
    case 7: // 'SHOW_ALL':
      return cfsLogArticles.filter(t => t.type <= 7);
    default:
      return cfsLogArticles;
  }
};

const mapStateToProps = state => ({
  currentCFSInfo: state.itemsByCategory.CFS_INFO,
  routingId: state.location.payload.id,
  cfsLogArticles: getVisibleCfsLogArticles(state.cfsLog.logArticles, state.cfsLogStatus.listFilterMask),
  isRefreshing: state.cfsLogStatus.isRefreshing,
  isAdding: state.cfsLogStatus.isAdding,
  isSysTextChkBoxChecked: state.cfsLogStatus.chkChecked_SysText,
  isUsrTextChkBoxChecked: state.cfsLogStatus.chkChecked_UsrText,
  isToneChkBoxChecked: state.cfsLogStatus.chkChecked_Tone,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  refreshCFSLogAsync,
  appendCFSLogAsync,
  showCFSLogSystemText,
  showCFSLogUserText,
  showCFSLogTone,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CFSLog);

