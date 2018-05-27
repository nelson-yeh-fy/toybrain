import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName } from 'recompose';

import CFSInfo from '../CFSInfo';
import {
  getCFSInfoAsync,
  postCFSInfoAsync,
  putCFSInfoAsync,
  patchCFSInfoAsync,
} from '../../reducers/cfsInfo';

const enhancedCFSInfo = compose(
  // setup this HOC's name
  setDisplayName('HOC(CFS)'),

  // use Redux's connect to provide a Redux HoC component
  connect(
    state => ({
      cfsInfoList: state.cfsInfoList,
      routingId: state.location.payload.id,
    }),
    dispatch => bindActionCreators({
      getCFSInfoAsync,
      postCFSInfoAsync,
      putCFSInfoAsync,
      patchCFSInfoAsync,
    }, dispatch),
  ),
)(CFSInfo);

export default enhancedCFSInfo;
