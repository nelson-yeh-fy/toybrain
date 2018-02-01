import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Menu, Label, Input, Tab } from 'semantic-ui-react'
import CfsBrief from './component/cfsBrief';
import CfsInfo from './component/cfsInfo';
import CfsRelated from './component/cfsRelated';
import './App.css';

class App extends Component {

  state = {
    visible: true,    
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;

    const tabpanes = [
      { menuItem: { key: '1', icon: 'users', content: 'CFS Summary' }, render: () => <Tab.Pane inverted className='App-tabcontent' key='tabCfsSummary'><CfsInfo /></Tab.Pane> },
      { menuItem: { key: '2', icon: 'newspaper', content: 'Related Info.' }, render: () => <Tab.Pane inverted className='App-tabcontent' style={{margin:0, border:0, padding:0}} key='tabCfsRelated'><CfsRelated /></Tab.Pane> },
      { menuItem: { key: '3', icon: 'search', content: 'NCIC' }, render: () => <Tab.Pane inverted className='App-tabcontent' style={{margin:0, border:0, padding:0}} key='tabCfsMap'><CfsRelated /></Tab.Pane> },
      { menuItem: { key: '4', icon: 'ticket', content: 'eTicket' }, render: () => <Tab.Pane inverted className='App-tabcontent' style={{margin:0, border:0, padding:0}} key='tabCfsMap'><CfsRelated /></Tab.Pane> },
    ];
    /*'CFS Summary', 'Related Info.', 'NCIC', 'eTicket'*/

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Segment className='App-sidebar' style={{ padding: '1em 0em 0em 1em' }} vertical inverted>
            <Input size='small' label={{ icon: 'search' }} labelPosition='left corner' placeholder='CFS No.' fluid />
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
            <Segment style={{ padding: '1em 0em 0em 1em' }} vertical inverted>
              <CfsBrief />
              <Grid>
                <Grid.Row>
                  <Grid.Column width={12} >
                    {
                      //CFS Desc Area
                    }
                    <Tab menu={{ fluid: true, inverted: true, aligned:'right' }} renderActiveOnly={true} panes={tabpanes} />                    
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {
                      //CFS Highlights Area
                    }
                    <Label size="small" color="teal" horizontal>501</Label>
                    <Label size="small" color="teal" horizontal>502</Label>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default App;


