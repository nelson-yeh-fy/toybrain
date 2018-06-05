import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import { bindActionCreators } from 'redux';

import CFSRelated from '../CFSRelated';
import { patchCFSInfoAsync } from '../../reducers/cfsInfo';

const enhancedCFSRelated = compose(
  // setup this HOC's name
  setDisplayName('HOC(CFSRelated)'),

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
)(CFSRelated);

export default enhancedCFSRelated;
