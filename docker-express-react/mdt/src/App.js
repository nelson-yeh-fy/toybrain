import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Button, Menu, Icon, Header, Label, Input, Divider, Feed, Progress, Tab } from 'semantic-ui-react'
import logo from './logo.svg';
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
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} className='mdt-sidebar' animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Input size='small' icon='search' iconPosition='left' placeholder='Search CFS...' />
            <Divider horizontal inverted>Menu</Divider>
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
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Grid className="App">
                <Grid.Row className="cfsbrief">
                  <Grid.Column>
                    {
                      //CFS Brief Information Area
                    }
                    <div>
                      <Button icon='bars' onClick={this.toggleVisibility} />
                      <Button onClick={this.increment}>Increment</Button>
                      <Label size='huge' color='teal' horizontal>#2018-000132</Label>
                      <Label size="huge" color="red" horizontal>P1 - Residential Fire</Label>

                      <Header size='small' color='teal'>102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204 <span>Verified</span></Header>
                      <Progress size='tiny' percent={this.state.percent} indicating />

                    </div>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={13} className='cfs-timeEvent' >
                    {
                      //CFS Desc Area
                    }
                    <div>
                      <div className="cfs-info">
                        <span className="cfs-info cfsDescTitle"> Description </span><i className="cfsDescTitle fas fa-phone-volume"></i>
                        <div className="cfs-info cfsDesc" id="scrollbar-style-6">
                          <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement.</p>
                          <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. Anim pariatur cliche reprehenderit,
                          enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                          nesciunt sapiente ea proident. </p>
                        </div>
                      </div>
                      {
                        //CFS TimeEvent Area, expandable and collapsable
                      }
                      <div className="cfs-info cfs-timeEvent">

                        <Tab menu={{ fluid: true, vertical: true, tabular: 'left' }} panes={[
                          { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
                          { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
                          { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
                        ]} />

                        <Feed>
                          <Feed.Event>
                            <Feed.Label image='/assets/images/avatar/small/helen.jpg' />
                            <Feed.Content>
                              <Feed.Summary>
                                <a>Helen Troy</a> added <a>2 new illustrations</a>
                                <Feed.Date>4 days ago</Feed.Date>
                              </Feed.Summary>
                              <Feed.Extra images>
                                <a><img src='/assets/images/wireframe/image.png' alt='fs' /></a>
                                <a><img src='/assets/images/wireframe/image.png' alt='fs' /></a>
                              </Feed.Extra>
                            </Feed.Content>
                          </Feed.Event>

                          <Feed.Event>
                            <Feed.Label image='/assets/images/avatar/small/jenny.jpg' />
                            <Feed.Content>
                              <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
                            </Feed.Content>
                          </Feed.Event>

                          <Feed.Event>
                            <Feed.Label image='/assets/images/avatar/small/joe.jpg' />
                            <Feed.Content>
                              <Feed.Summary>
                                <a>Joe Henderson</a> posted on his page
                          <Feed.Date>3 days ago</Feed.Date>
                              </Feed.Summary>
                              <Feed.Extra text>
                                <div className='cfs-timeEvent'>
                                  Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                          over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                          day soon.
                          </div>
                              </Feed.Extra>
                            </Feed.Content>
                          </Feed.Event>
                        </Feed>

                        <p>A fire started behind the pizza oven and is getting worse. One employee is stuck in bathroom. Propane Tanks in Basement. Anim pariatur cliche reprehenderit,
                          enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                          nesciunt sapiente ea proident. </p>
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    {
                      //CFS Highlights Area
                    }
                    <Label size="small" color="teal" horizontal>501</Label>
                    <Label size="small" color="teal" horizontal>502</Label>
                  </Grid.Column>
                </Grid.Row>


              </Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default App;


