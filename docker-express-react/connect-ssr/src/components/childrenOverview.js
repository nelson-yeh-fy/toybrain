import React from 'react';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { Container, Label, Header, Segment, Divider } from 'semantic-ui-react';
// import { CFSInfoPropType } from '../constants/propsTypes';
// import { getCFSInfoAsync, patchCFSInfoAsync } from '../actions/cfsActions';
// import '../assets/App.css';

// const childrenOverview = ({ currentCFSInfo, getCFSInfoAsync }) => (
// From CFSInfo //
const childrenOverview = () => (
  <Container>
    <Header id="headerOfCfsInfo" size="large">
      Daddy Bank
      <Label htmlFor="headerOfCfsInfo" size="medium" color="green" horizontal>
        funded
      </Label>
      <Label htmlFor="headerOfCfsInfo" size="medium" color="red" horizontal>
        P1
      </Label>
    </Header>
    <div>
      <Segment color="blue">
        <p className="cfs-title"> note: </p>
      </Segment>
      <p className="cfs-description no-border">note2</p>
      <Divider />
      <button type="button">getcfsinfo async</button>
    </div>
  </Container>
);

// CFSInfo.propTypes = {
//   currentCFSInfo: CFSInfoPropType.isRequired,
//   getCFSInfoAsync: PropTypes.func.isRequired,
//   patchCFSInfoAsync: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   currentCFSInfo: state.itemsByCategory.CFS_INFO,
// });

// const mapDispatchToProps = dispatch => bindActionCreators({ patchCFSInfoAsync, getCFSInfoAsync }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CFSInfo);

export default childrenOverview;
