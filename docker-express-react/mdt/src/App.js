import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Menu, Label, Input, Tab, Step, Icon, Dropdown, Button, Rail } from 'semantic-ui-react'
import CfsHighligh from './component/cfsHighligh';
import CfsInfo from './component/cfsInfo';
import CfsRelated from './component/cfsRelated';
import Ncic from './component/ncic';
import imgDefault from './assets/images/image.png'
import './App.css';

class App extends Component {

  state = {
    visible: true, 
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;

    const tabpanes = [
      { menuItem: { key: '1', icon: 'users', content: 'CFS Summary' }, render: () => <Tab.Pane inverted className='cfs-info-tabcontent' key='tabCfsSummary'><CfsInfo /></Tab.Pane> },
      { menuItem: { key: '2', icon: 'newspaper', content: 'Related Info.' }, render: () => <Tab.Pane inverted className='cfs-info-tabcontent' key='tabCfsRelated'><CfsRelated /></Tab.Pane> },
      { menuItem: { key: '3', icon: 'search', content: 'NCIC' }, render: () => <Tab.Pane inverted className='cfs-info-tabcontent' key='tabCfsMap'><Ncic /></Tab.Pane> },
      { menuItem: { key: '4', icon: 'ticket', content: 'eTicket' }, render: () => <Tab.Pane inverted className='cfs-info-tabcontent' key='tabCfsMap'><CfsRelated /></Tab.Pane> },
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
            <Segment vertical inverted>
              <Button basic color='blue' icon='bars' className='cfs-case-selector'
              label={{ size: 'large', as: 'a', basic: true, color: 'blue', pointing: 'left', content: '#2018-000132' }}
              onClick={this.toggleVisibility}
              />
              <Dropdown inline>
                  <Dropdown.Menu>
                      <Dropdown.Item>2018-000130</Dropdown.Item>
                      <Dropdown.Item>2018-000131</Dropdown.Item>
                      <Dropdown.Item>2018-000132</Dropdown.Item>
                      <Dropdown.Item>2018-000135</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              <CfsHighligh />
              <Grid columns={2}>
                  <Grid.Column width={11}>
                    {
                      //CFS Info Area
                    }                    
                    <Tab menu={{ fluid: true, inverted: true, aligned:'right'}} defaultActiveIndex={0} renderActiveOnly={true} panes={tabpanes} />

                    {
                      //CFS Status Area
                    }
                    <Rail attached position='right'>                    
                      <Step.Group size='mini' vertical>
                      <Step>
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
                      
                        <Label size="small" color="teal" horizontal>501</Label>
                        <Label size="small" color="teal" horizontal>502</Label>
                    
                  </Rail>
                    
                  </Grid.Column>


              </Grid>
            </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default App;


