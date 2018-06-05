import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import { bindActionCreators } from 'redux';

import CFSInfo from '../CFSInfo';
import { patchCFSInfoAsync } from '../../reducers/cfsInfo';

const enhancedCFSInfo = compose(
  // setup this HOC's name
  setDisplayName('HOC(CFSInfo)'),

  // use Redux's connect to provide a Redux HoC component
  connect(
    state => ({
      currentCFSInfo: state.cfsInfo,
      routingId: state.location.payload.id,
    }),
    // dispatch => ({
    //   patchCFSInfoAsync: () => dispatch(patchCFSInfoAsync()),
    //   goHome: () => dispatch({ type: 'HOME' }),
    // }),
    dispatch => bindActionCreators({ patchCFSInfoAsync }, dispatch),
  ),
)(CFSInfo);

export default enhancedCFSInfo;
