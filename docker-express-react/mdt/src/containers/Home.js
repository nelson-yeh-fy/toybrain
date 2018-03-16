import React, { Component } from 'react'
import { Image, Container, Grid, Sidebar, Segment, Menu, Label, Input, Tab, Step, Icon, Dropdown, Button, Rail } from 'semantic-ui-react'
import CFSInfo from './CFSInfo';
import CfsRelated from '../components/cfsRelated';
import Ncic from '../components/ncic';
import '../assets/App.css';

class Home extends Component {

  state = {
    visible: true,
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;

    const tabpanes = [
      {
        menuItem:
          <Menu.Item as='a' header onClick={this.toggleVisibility}>
            <Image
              size='mini'
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="14"
              style={{ marginRight: '0.5em' }}
            />
            <Dropdown item simple text='Your CFS(3)'>
              <Dropdown.Menu>
                <Dropdown.Item>2018-000354</Dropdown.Item>
                <Dropdown.Item>2018-000141</Dropdown.Item>
                <Dropdown.Item>2018-000214</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>,
        render: () =>
          <Tab.Pane className='cfs-info-tabcontent' key='tabCfsSummary'>
            <CFSInfo />
          </Tab.Pane>
      },
      {
        menuItem:
          <Menu.Item as='a' header>
            2018-000354
          </Menu.Item>,
        render: () =>
          <Tab.Pane className='cfs-info-tabcontent' key='tabCfsSummary'><CFSInfo /></Tab.Pane>
      },
      {
        menuItem: { key: '2', icon: 'newspaper', content: 'Related Info.' }, render: () =>
          <Tab.Pane className='cfs-info-tabcontent' key='tabCfsRelated'><CfsRelated /></Tab.Pane>
      },
      {
        menuItem: { key: '3', icon: 'search', content: 'NCIC' }, render: () =>
          <Tab.Pane className='cfs-info-tabcontent' key='tabCfsNcic'><Ncic /></Tab.Pane>
      },
      {
        menuItem: { key: '4', icon: 'ticket', content: 'eTicket' }, render: () =>
          <Tab.Pane className='cfs-info-tabcontent' key='tabCfsTicket'><CfsRelated /></Tab.Pane>
      },
    ];

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Segment className='App-sidebar' style={{ padding: '1em 0em 0em 1em' }} vertical inverted>
            <Menu.Item as='a' header>
              InfoShare MDT
        </Menu.Item>
            <Menu.Item>
              <div>Inbox&nbsp;&nbsp;
              <Label image id="cfsBoxCount" color='teal'>2</Label>
              </div>
              <Menu.Menu>
                <Menu.Item as='a' name='Initiate CFS'>
                  Init. CFS
              </Menu.Item>
                <Menu.Item as='a' name='Initiate MVStop'>
                  Init. MVSTOP
               </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item as='a' name='NCIC'>
              NCIC
            </Menu.Item>
            <Menu.Item as='a' name='Map'>
              MAP
            </Menu.Item>
            <Menu.Item as='a' name='Chat'>
              CHAT
            </Menu.Item>
            <Menu.Item as='a' name='Super'>
              SUPER
            </Menu.Item>
          </Segment>
        </Sidebar>
        <Sidebar.Pusher>
          <div>
            <Grid columns={2}>
              <Grid.Column width={11} style={{ paddingRight: 0 }}>
                <Tab menu={{ inverted: true, style: { borderRadius: 0, height: 50 } }} defaultActiveIndex={0} renderActiveOnly={true} panes={tabpanes} />
              </Grid.Column>
              <Grid.Column width={5} style={{ paddingLeft: 0 }}>
                <Menu inverted style={{ borderRadius: 0, height: 50 }}>
                  <Menu.Item>
                    <Input size='medium' label={{ icon: 'search' }} labelPosition='left corner' placeholder='Enter CFS Number' />
                  </Menu.Item>
                </Menu>
                <Segment vertical style={{ paddingLeft: 14 }}>
                  <Step.Group size='mini' vertical>
                    <Step className='step'>
                      <Icon name='call square' />
                      <Step.Content>
                        <Step.Title>CFS Initiated</Step.Title>
                        <Step.Description>15:31:00</Step.Description>
                      </Step.Content>
                    </Step>
                    <Step active>
                      <Icon name='send outline' />
                      <Step.Content>
                        <Step.Title>Unit Dispatched</Step.Title>
                        <Step.Description>15:31:20</Step.Description>
                      </Step.Content>
                    </Step>
                    <Step disabled>
                      <Icon name='angle double right' />
                      <Step.Content>
                        <Step.Title>Unit Enroute</Step.Title>
                        <Step.Description>15:31:30</Step.Description>
                      </Step.Content>
                    </Step>
                    <Step disabled>
                      <Icon name='building' />
                      <Step.Content>
                        <Step.Title>Unit On Scene</Step.Title>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                </Segment>
                <Segment style={{ paddingLeft: 14 }}>
                  <Label size="small" color="teal" horizontal>501</Label>
                  <Label size="small" color="teal" horizontal>502</Label>
                </Segment>
              </Grid.Column>
            </Grid>
            <Button basic color='blue' icon='bars' className='cfs-case-selector'
              label={{ size: 'large', as: 'a', basic: true, color: 'blue', pointing: 'left', content: '#2018-000132' }}
              onClick={this.toggleVisibility}
            />
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default Home;


