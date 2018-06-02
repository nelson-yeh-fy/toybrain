import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';

import CFSRelated from '../CFSRelated';
import { patchCFSInfoAsync } from '../../reducers/cfsInfo';

const enhancedCFSRelated = compose(
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
)(CFSRelated);

export default enhancedCFSRelated;
