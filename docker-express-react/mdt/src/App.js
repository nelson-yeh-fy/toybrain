import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Container, Button, Menu, Icon, Header, Label, Input, Divider, Feed, Progress, Tab } from 'semantic-ui-react'
import CfsBrief from './component/cfsBrief';
import './App.css';

class App extends Component {

  state = {
    visible: true,
    percent: 20
  }

  increment = () => this.setState({
    percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  tabpanes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]
  

  render() {
    const { visible } = this.state
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
                    <Tab menu={{ fluid: true, text: true, inverted: true, aligned:'right' }} panes={[
                          { menuItem: { key: 'menu_cfsSummary', icon: 'users', content: 'CFS Summary' }, render: () => <Tab.Pane key='tab1'><CfsBrief /></Tab.Pane> },
                          { menuItem: { key: 'menu_cfsRelated', icon: 'map', content: 'Related Info.' }, render: () => <Tab.Pane loading>Tab 2 Content</Tab.Pane> },
                          { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
                        ]} />
                    
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


