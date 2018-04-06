import React from 'react';
import { Image, Grid, Segment, Menu, Label, Input, Tab, Step, Icon, Dropdown, Button, List, Header } from 'semantic-ui-react';
import CFSInfo from './CFSInfo';
import CFSRelated from './CFSRelated';
import Simulate from './Simulate';
import NCIC from './NCIC';
import '../assets/App.css';

const tabpanes = [
  {
    menuItem:
      <Menu.Item as="a" header key="0">
        <Image
          size="mini"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt=""
          height="14"
          style={{ marginRight: '0.5em' }}
        />
        <Dropdown item simple text="2018-000354(3 more)">
          <Dropdown.Menu>
            <Dropdown.Item>2018-000354 [Car Stop]</Dropdown.Item>
            <Dropdown.Item>2018-000141 [Fire]</Dropdown.Item>
            <Dropdown.Item>2018-000214 [Fire]</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>New CFS</Dropdown.Item>
            <Dropdown.Item>New Car Stop</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>,
    render: () => (
      <Tab.Pane className="cfs-info-tabcontent" key="tabCfsSummary">
        <CFSInfo />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: '1', icon: 'vcard', content: 'CFS Summary' },
    render: () => (
      <Tab.Pane className="cfs-info-tabcontent" key="tabCfsSummary">
        <CFSInfo />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: '2', icon: 'newspaper', content: 'CFS Related Info.' },
    render: () => (
      <Tab.Pane className="cfs-info-tabcontent" key="tabCfsRelated">
        <CFSRelated />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: '3', icon: 'ticket', content: 'CFS eTickets' },
    render: () => (
      <Tab.Pane className="cfs-info-tabcontent" key="tabCfsTicket">
        <CFSRelated />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: '4', icon: 'search', content: 'NCIC' },
    render: () => (
      <Tab.Pane className="cfs-info-tabcontent" key="tabCfsNcic">
        <NCIC />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: '5', icon: 'bug', content: '' },
    render: () => (
      <Tab.Pane className="cfs-info-tabcontent" key="tabSimulate">
        <Simulate />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: '6', icon: 'map', content: '' },
    render: () => (
      <Tab.Pane className="cfs-info-tabcontent" key="tabSimulate">
        <Simulate />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: '7', icon: 'male', content: '' },
    render: () => (
      <Tab.Pane className="cfs-info-tabcontent" key="tabSimulate">
        <Simulate />
      </Tab.Pane>
    ),
  },
];

const Home = () => (
  <div>
    <Grid columns={2}>
      <Grid.Column width={12} style={{ paddingRight: 0 }}>
        <Tab menu={{ inverted: true, style: { borderRadius: 0, height: 50 } }} defaultActiveIndex={0} renderActiveOnly panes={tabpanes} />
      </Grid.Column>

      <Grid.Column width={4} style={{ paddingLeft: 0 }}>
        <Menu inverted style={{ borderRadius: 0, height: 50 }}>
          <Menu.Item>
            <Input size="medium" label={{ icon: 'search' }} labelPosition="left corner" placeholder="Enter CFS Number" />
          </Menu.Item>
        </Menu>
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
      </Grid.Column>
    </Grid>
    <Button
      basic
      color="blue"
      icon="bars"
      className="cfs-case-selector"
      label={{
        size: 'large', as: 'a', basic: true, color: 'blue', pointing: 'left', content: '#2018-000132',
      }}
      onClick={this.toggleVisibility}
    />
  </div>
);

export default Home;
