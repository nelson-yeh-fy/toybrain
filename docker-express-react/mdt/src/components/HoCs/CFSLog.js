import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import CfsLog from '../CFSLog';
import {
  refreshCFSLog,
  refreshCFSLogAsync,
  appendCFSLog,
  appendCFSLogAsync,
} from '../../reducers/cfsLog';
import {
  showCFSLogSystemText,
  showCFSLogUserText,
  showCFSLogTone,
} from '../../reducers/cfsLogStatus';
import '../../assets/App.css';

const CFSLog = props => (
  <div>
  <CfsLog
    varCfsLogArticles={props.cfsLogArticles}
    varIsRefreshing={props.isRefreshing}
    varIsAdding={props.isAdding}
    varIsSysTextChkBoxChecked={props.isSysTextChkBoxChecked}
    varIsUsrTextChkBoxChecked={props.isUsrTextChkBoxChecked}
    varIsToneChkBoxChecked={props.isToneChkBoxChecked}
    funcShowCFSLogSystemText={props.showCFSLogSystemText}
    funcShowCFSLogUserText={props.showCFSLogUserText}
    funcShowCFSLogTone={props.showCFSLogTone}
    funcRefreshCFSLogAsync={props.refreshCFSLogAsync}
    funcAppendCFSLogAsync={props.appendCFSLogAsync}
  />
  <p>{props.ownPropItem}</p>
  </div>
);

CFSLog.propTypes = {
  cfsLogArticles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.number,
    text: PropTypes.string,
    addby: PropTypes.string,
    addon: PropTypes.string,
  })).isRequired,
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

// Take application state (our redux store) as an argument,
// and passed as props to this component.
const mapStateToProps = (state, ownProps) => ({
  cfsLogArticles: getVisibleCfsLogArticles(state.cfsLog.logArticles, state.cfsLogStatus.listFilterMask),
  // 'isRefreshing' means one of CFSInfo.js's prop;
  // 'state.cfsLogListStatus.isRefreshing' means store (createStore via rootReducer)'s isRefreshing variable
  isRefreshing: state.cfsLogStatus.isRefreshing,
  isAdding: state.cfsLogStatus.isAdding,
  isSysTextChkBoxChecked: state.cfsLogStatus.chkChecked_SysText,
  isUsrTextChkBoxChecked: state.cfsLogStatus.chkChecked_UsrText,
  isToneChkBoxChecked: state.cfsLogStatus.chkChecked_Tone,
  ownPropItem: () => { console.log(ownProps.location.query.filter); return ownProps.location.query.filter || 'all'; },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  refreshCFSLog,
  refreshCFSLogAsync,
  appendCFSLog,
  appendCFSLogAsync,
  showCFSLogSystemText,
  showCFSLogUserText,
  showCFSLogTone,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CFSLog));
