import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName, lifecycle, mapProps } from 'recompose';
import { Container } from 'semantic-ui-react';

import CFSAbstract from '../CFSAbstract';
import CFSDesc from '../CFSDesc';
import CFSLog from '../CFSLog';
import SpinnerWhileLoading from '../SpinnerWhileLoading';
import {
  getCFSInfoAsync,
  postCFSInfoAsync,
  putCFSInfoAsync,
  patchCFSInfoAsync,
} from '../../reducers/cfsInfo';
import '../../assets/App.css';

const CFSInfo = (props) => {
  console.log(props);
  return (
    <Container>
      <CFSAbstract />
      <CFSDesc funcPatchCFSInfo={props.patchCFSInfoAsync} />
    </Container>
  );
};

CFSInfo.propTypes = {
  // cfsStatus: PropTypes.number.isRequired,
  // isCFSUpdating: PropTypes.bool.isRequired,
  // getCFSInfoAsync: PropTypes.func.isRequired,
  // postCFSInfoAsync: PropTypes.func.isRequired,
  // putCFSInfoAsync: PropTypes.func.isRequired,
  // patchCFSInfoAsync: PropTypes.func.isRequired,
};

const enhancedCFSInfo = compose(
  // setup this HOC's name
  //setDisplayName('HOC(CFS)'),

  // user react-router-dom's withRouter to receive router's params,
  // e.g.: /CFS/:cfsID, using this.props.match.params.cfsId to get it.

  // use Redux's connect to provide a Redux HoC component
  connect(
    state => ({
      // cfsInfo: state.cfsInfoList.find(item => { console.log('item._id:'+ item._id); item._id === '5ae0c99dd489186a6072013f' }),
      // cfsInfo: Object.assign([], state.cfsInfoList.find(item => item._id === ownParams.cfsId/* '5ae0c99dd489186a6072013f' */)),
      cfsInfo: Object.assign([], state.cfsInfoList.find(item => item._id === '5ae0c99dd489186a6072013f' )),
      // areAllDataReady: state.cfsInfoList.findIndex(item => item._id === '5ae0c99dd489186a6072013f'),
      // isCFSUpdating: state.cfsInfo.isCFSUpdating,
    }),
    dispatch => bindActionCreators({
      getCFSInfoAsync,
      postCFSInfoAsync,
      putCFSInfoAsync,
      patchCFSInfoAsync,
    }, dispatch),
  ),

  // use recompose's lifecycle to configure additional lifecycle behaviors into this HoC component
  lifecycle({
    componentDidMount() {
      console.log('Looking for id:' + this.props.match.params.cfsId);
      console.log(this.props.cfsInfo);
      // if (this.props.areAllDataReady) {
      //   this.props.getCFSInfoAsync();
      // }
    },
  }),

  // add an additional recompose's branched HoC component into this HoC component
  // SpinnerWhileLoading(props => () => true/*props.areAllDataReady*/),

  // assign pure functional component for recompose to composite a new HoC component
)(CFSInfo);

export default enhancedCFSInfo;
