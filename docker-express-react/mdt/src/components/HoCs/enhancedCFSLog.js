import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName } from 'recompose';

import CFSLog from '../CFSLog';
import {
  refreshCFSLogAsync,
  appendCFSLogAsync,
} from '../../reducers/cfsLog';
import {
  showCFSLogSystemText,
  showCFSLogUserText,
  showCFSLogTone,
} from '../../reducers/cfsLogStatus';
import '../../assets/App.css';

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

const enhancedCFSLog = compose(
  // setup this HOC's name
  setDisplayName('HOC(CFSLog)'),

  // use Redux's connect to provide a Redux HoC component
  connect(
    state => ({
      routingId: state.location.payload.id,
      cfsLogArticles: getVisibleCfsLogArticles(state.cfsLog.logArticles, state.cfsLogStatus.listFilterMask),
      isRefreshing: state.cfsLogStatus.isRefreshing,
      isAdding: state.cfsLogStatus.isAdding,
      isSysTextChkBoxChecked: state.cfsLogStatus.chkChecked_SysText,
      isUsrTextChkBoxChecked: state.cfsLogStatus.chkChecked_UsrText,
      isToneChkBoxChecked: state.cfsLogStatus.chkChecked_Tone,
    }),
    dispatch => bindActionCreators({
      refreshCFSLogAsync,
      appendCFSLogAsync,
      showCFSLogSystemText,
      showCFSLogUserText,
      showCFSLogTone,
    }, dispatch),
  ),
)(CFSLog);

export default enhancedCFSLog;
