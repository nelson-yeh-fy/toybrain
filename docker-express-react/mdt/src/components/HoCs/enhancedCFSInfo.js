import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';

import CFSInfo from '../CFSInfo';
import { patchCFSInfoAsync } from '../../reducers/cfsInfo';

const enhancedCFSInfo = compose(
  // setup this HOC's name
  setDisplayName('HOC(CFS)'),

  // use Redux's connect to provide a Redux HoC component
  connect(
    state => ({
      cfsInfoList: state.cfsInfoList,
      routingId: state.location.payload.id,
      isDataNotReady: !Array.isArray(state.cfsInfoList) || state.cfsInfoList.length === 1,
    }),
    dispatch => ({
      patchCFSInfoAsync: () => dispatch(patchCFSInfoAsync()),
      goHome: () => dispatch({ type: 'HOME' }),
    }),
  ),
)(CFSInfo);

export default enhancedCFSInfo;
