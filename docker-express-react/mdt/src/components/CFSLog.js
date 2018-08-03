import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Segment, Button, Divider, Comment, Input, Form } from 'semantic-ui-react';
import CFSLogItem from './CFSLogItem';
import { CFSLogPropType } from '../constants/propsTypes';
import { appendCFSLogAsync, refreshCFSLogAsync, toggleShowSystemLogs, toggleShowUserLogs, toggleShowToneLogs } from '../actions/cfsActions';
import '../assets/App.css';

let inputVal = '';

const CFSLog = ({
  currentCfsId,
  cfsLogArticles,
  isRefreshing,
  isAdding,
  isSystemLogsDisplayed,
  isUserLogsDisplayed,
  isToneLogsDisplayed,
  refreshCFSLogAsync,
  appendCFSLogAsync,
  toggleShowSystemLogs,
  toggleShowUserLogs,
  toggleShowToneLogs,
}) => (
  <Container>
    <Segment color="blue" >
      <div className="cfs-title">CFS Logs:
        <label>
          <input
            type="checkbox"
            id="myCheckBox_SystemText"
            value="System Text"
            checked={isSystemLogsDisplayed}
            onChange={() => { toggleShowSystemLogs(); }}
          />
          System Text
        </label>
        <label>
          <input
            type="checkbox"
            id="myCheckBox_UserText"
            value="User Text"
            checked={isUserLogsDisplayed}
            onChange={() => { toggleShowUserLogs(); }}
          />
          User Text
        </label>
        <label>
          <input
            type="checkbox"
            id="myCheckBox_Tone"
            value="Tone"
            checked={isToneLogsDisplayed}
            onChange={() => { toggleShowToneLogs(); }}
          />
          Tone
        </label>
        <Button
          onClick={() => { refreshCFSLogAsync(currentCfsId); }}
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
      cfsId: currentCfsId,
      type: 2,
      text: inputVal,
      addby: 'TestUser',
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
  isSystemLogsDisplayed: PropTypes.bool.isRequired,
  isUserLogsDisplayed: PropTypes.bool.isRequired,
  isToneLogsDisplayed: PropTypes.bool.isRequired,
  refreshCFSLogAsync: PropTypes.func.isRequired,
  appendCFSLogAsync: PropTypes.func.isRequired,
  toggleShowSystemLogs: PropTypes.func.isRequired,
  toggleShowUserLogs: PropTypes.func.isRequired,
  toggleShowToneLogs: PropTypes.func.isRequired,
};


const getVisibleCfsLogArticles = createSelector(
  state => state.itemsByCategory.CFS_LOG,
  state => state.userPreference.isSystemLogsDisplayed,
  state => state.userPreference.isUserLogsDisplayed,
  state => state.userPreference.isToneLogsDisplayed,
  (CFS_LOG, isSystemLogsDisplayed, isUserLogsDisplayed, isToneLogsDisplayed) => {
    if (isSystemLogsDisplayed === true && isUserLogsDisplayed === true && isToneLogsDisplayed === true) {
      return CFS_LOG;
    }

    let visibleLogs = [];
    if (isSystemLogsDisplayed === true)
      visibleLogs = visibleLogs.concat(CFS_LOG.filter(t => t.type === 1));

    if (isUserLogsDisplayed === true)
      visibleLogs = visibleLogs.concat(CFS_LOG.filter(t => t.type === 2));

    if (isToneLogsDisplayed === true)
      visibleLogs = visibleLogs.concat(CFS_LOG.filter(t => t.type === 4));

    return visibleLogs;
  },
);

const mapStateToProps = state => ({
  currentCfsId: state.itemsByCategory.CFS_INFO._id,
  cfsLogArticles: getVisibleCfsLogArticles(state),
  // isRefreshing: false,
  // isAdding: false,
  isSystemLogsDisplayed: state.userPreference.isSystemLogsDisplayed,
  isUserLogsDisplayed: state.userPreference.isUserLogsDisplayed,
  isToneLogsDisplayed: state.userPreference.isToneLogsDisplayed,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  refreshCFSLogAsync,
  appendCFSLogAsync,
  toggleShowSystemLogs,
  toggleShowUserLogs,
  toggleShowToneLogs,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CFSLog);

