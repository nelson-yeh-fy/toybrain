import React from 'react';
import { Container, Segment, Label, Step, Icon, List, Header } from 'semantic-ui-react';

const CFSStatus = () => (
  <Container>
    <Segment inverted tertiary className="margin-left-Right-14" style={{ height: 150 }} >
      <Header as="h2" inverted>
        CFS Map
        <Header.Subheader>
          under construction
        </Header.Subheader>
      </Header>
    </Segment>
    <Step.Group vertical className="margin-left-Right-14">
      <Step className="step">
        <Icon name="volume control phone" />
        <Step.Content>
          <Step.Title>CFS Initiated</Step.Title>
          <Step.Description>15:31:00</Step.Description>
        </Step.Content>
      </Step>
      <Step active>
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
      <Step>
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
      <Step disabled>
        <Icon name="building" />
        <Step.Content>
          <Step.Title>Unit On Scene</Step.Title>
          <Step.Description>15:38:00</Step.Description>
        </Step.Content>
      </Step>
      <Step disabled>
        <Icon name="file text" />
        <Step.Content>
          <Step.Title>CFS Closed</Step.Title>
          <Step.Description>15:39:00</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  </Container>
);

export default CFSStatus;
