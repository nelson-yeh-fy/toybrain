import React, { Component } from 'react'
import { Container, Label, Header } from 'semantic-ui-react'
import '../assets/App.css';

class CfsHighligh extends Component {
    state = {
        percent: 20,
    }

    increment = () => this.setState({
        percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
    })

    render() {
        return (
            <Container className='cfs-highlight' textAlign='justified' fluid>                
                <Header size='large' inverted>102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204 
                    <Label size="medium" color="green" horizontal>Verified</Label>
                    <Label size="medium" color="red" horizontal>P1 - Residential Fire</Label>
                </Header>
                {
                /*
                <Button basic color='blue' icon='add' onClick={this.increment} />
                <Progress size='tiny' percent={this.state.percent} indicating />
                */
                }
            </Container>
        )
    }
}

export default CfsHighligh;
