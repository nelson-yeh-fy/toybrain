import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Container, Button, Menu, Header, Label, Input, Progress, Tab } from 'semantic-ui-react'
import CfsBrief from './component/cfsBrief';
import CfsRelated from './component/cfsRelated';
import './App.css';

class App extends Component {

  state = {
    visible: true,
    percent: 20,
  }

  increment = () => this.setState({
    percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  

  render() {
    const { visible } = this.state;

    const tabpanes = [
      { menuItem: { key: '1', icon: 'users', content: 'CFS Summary' }, render: () => <Tab.Pane style={{margin:0, border:0, padding:0}} key='tabCfsSummary'><CfsBrief /></Tab.Pane> },
      { menuItem: { key: '2', icon: 'newspaper', content: 'Related Info.' }, render: () => <Tab.Pane style={{margin:0, border:0, padding:0}} key='tabCfsRelated'><CfsRelated /></Tab.Pane> },
      { menuItem: { key: '3', icon: 'search', content: 'NCIC' }, render: () => <Tab.Pane style={{margin:0, border:0, padding:0}} key='tabCfsMap'><CfsRelated /></Tab.Pane> },
      { menuItem: { key: '4', icon: 'ticket', content: 'eTicket' }, render: () => <Tab.Pane style={{margin:0, border:0, padding:0}} key='tabCfsMap'><CfsRelated /></Tab.Pane> },
    ];

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} className='mdt-sidebar' animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Segment style={{ padding: '1em 0em 0em 1em' }} vertical inverted>
            <Input size='small' label={{ icon: 'search' }} labelPosition='left corner' placeholder='Search CFS...' fluid />
            <Menu.Item>
              <div>CFS BOX&nbsp;&nbsp;
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
              <Container textAlign='justified' fluid>
                {
                  //CFS Brief Information Area
                }
                <Button icon='bars' onClick={this.toggleVisibility} />
                <Button icon='add' onClick={this.increment} />
                <Label size='huge' color='teal' horizontal>#2018-000132</Label>
                <Label size="huge" color="red" horizontal>P1 - Residential Fire</Label>
                <Header size='medium' color='teal'>102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204 <Label size="tiny" color="green" horizontal>Verified</Label></Header>
                <Progress size='tiny' percent={this.state.percent} indicating />
              </Container>

              <Grid>
                <Grid.Row>
                  <Grid.Column width={12} className='cfs-timeEvent' >
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


