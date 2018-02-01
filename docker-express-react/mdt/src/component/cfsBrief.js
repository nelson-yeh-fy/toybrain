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
                <Button
                    basic
                    color='blue'
                    icon='bars'
                    label={{ size:'large', as: 'a', basic: true, color: 'blue', pointing: 'left', content: '#2018-000132' }}
                    onClick={this.toggleVisibility}
                />
                <Button basic color='blue' icon='add' onClick={this.increment} />
                <Label size="medium" color="red" horizontal>P1 - Residential Fire</Label>  
                <Header size='large' inverted>102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204 <Label size="tiny" color="green" horizontal>Verified</Label></Header>
                <Progress size='tiny' percent={this.state.percent} indicating />
          </Container>
        )
    }
}

export default CfsBrief;
