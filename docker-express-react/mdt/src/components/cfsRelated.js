import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Label, Header, Segment, Divider } from 'semantic-ui-react';
import EditableListElement from './EditableListElement';
import { CFSInfoPropType } from '../constants/propsTypes';
import { patchCFSInfoAsync } from '../actions/cfsActions';
import '../assets/App.css';

const CFSRelated = ({ currentCFSRelated, patchCFSInfoAsync }) => (
  <Container>
    <Header size="large">{currentCFSRelated.cfsNumber} :102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204
    </Header>
    <div>
      <Segment color="blue">
        <p className="cfs-title"> CFS Related Info: </p>
      </Segment>
      <EditableListElement
        funcToInvoke={patchCFSInfoAsync}
        itemIdToBeUpdate={currentCFSRelated._id}
        fieldKeyTBUpdate="cfsDesc"
        fieldValueTBUpdate={currentCFSRelated.cfsDesc}
      />
      <Divider />
      <Segment color="blue">
        <p className="cfs-title"> Location Related Info: </p>
      </Segment>
      <EditableListElement
        funcToInvoke={patchCFSInfoAsync}
        itemIdToBeUpdate={currentCFSRelated._id}
        fieldKeyTBUpdate="cfsDesc"
        fieldValueTBUpdate={currentCFSRelated.cfsDesc}
      />
      <Divider />
    </div>
  </Container>
);

CFSRelated.propTypes = {
  currentCFSRelated: CFSInfoPropType.isRequired,
  patchCFSInfoAsync: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  currentCFSRelated: state.itemsByCategory.CFS_RELATED,
});

const mapDispatchToProps = dispatch => bindActionCreators({ patchCFSInfoAsync }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CFSRelated);
