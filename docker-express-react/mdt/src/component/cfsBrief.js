import React, { Component } from 'react'
import { Container, Button, Label, Header, Progress } from 'semantic-ui-react'
import '../App.css';

class CfsBrief extends Component {

    state = {
        visible: true,
        percent: 20,
      }
    
      toggleVisibility = () => this.setState({ visible: !this.state.visible })
      
      increment = () => this.setState({
        percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
      })
    
    render() {
        return (
            <Container textAlign='justified' fluid>
                <Button icon='bars' onClick={this.toggleVisibility} />
                <Button icon='add' onClick={this.increment} />
                <Label size='huge' color='teal' horizontal>#2018-000132</Label>
                <Label size="huge" color="red" horizontal>P1 - Residential Fire</Label>
                <Header size='medium' color='teal'>102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204 <Label size="tiny" color="green" horizontal>Verified</Label></Header>
                <Progress size='tiny' percent={this.state.percent} indicating />
          </Container>
        )
    }
}

export default CfsBrief;
