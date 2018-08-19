import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Label, Step, Icon, List } from 'semantic-ui-react';
import { CFSInfoPropType } from '../constants/propsTypes';
import { getCFSInfoAsync, patchCFSInfoAsync } from '../actions/cfsActions';
import '../assets/App.css';

const CFSStatus = ({ currentCFSStatus }) => { console.log("cfsStatus:" + currentCFSStatus); return (
  <Container>
    <Step.Group vertical className="margin-left-Right-14">
      <Step disabled={currentCFSStatus < 0} className="step">
        <Icon name="volume control phone" />
        <Step.Content>
          <Step.Title>CFS Initiated</Step.Title>
          <Step.Description>15:31:00</Step.Description>
        </Step.Content>
      </Step>
      <Step disabled={currentCFSStatus < 1}>
        <Icon name="send outline" />
        <Step.Content>
          <Step.Title>Unit Dispatched</Step.Title>
          <Step.Description>
            <List divided selection>
              <List.Item>
                <Label htmlFor="1" size="small" color="teal" horizontal>501</Label> 15:31:20
              </List.Item>
              <List.Item>
                <Label htmlFor="1" size="small" color="teal" horizontal>502</Label> 15:31:30
              </List.Item>
              <List.Item>
                <Label htmlFor="1" size="small" color="red" horizontal>701</Label> 15:31:32
              </List.Item>
            </List>
          </Step.Description>
        </Step.Content>
      </Step>
      <Step disabled={currentCFSStatus < 2}>
        <Icon name="road" />
        <Step.Content>
          <Step.Title>Unit Enroute</Step.Title>
          <Step.Description>
            <List divided selection>
              <List.Item>
                <Label htmlFor="1" size="small" color="red" horizontal>503</Label> 15:32:31
              </List.Item>
            </List>
          </Step.Description>
        </Step.Content>
      </Step>
      <Step disabled={currentCFSStatus < 3}>
        <Icon name="building" />
        <Step.Content>
          <Step.Title>Unit On Scene</Step.Title>
          <Step.Description>15:38:00</Step.Description>
        </Step.Content>
      </Step>
      <Step disabled={currentCFSStatus < 4}>
        <Icon name="file text" />
        <Step.Content>
          <Step.Title>CFS Closed</Step.Title>
          <Step.Description>15:39:00</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  </Container>
);
};

CFSStatus.propTypes = {
  currentCFSStatus: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  currentCFSStatus: state.itemsByCategory.CFS_INFO.cfsStatus,
});

export default connect(mapStateToProps)(CFSStatus);
