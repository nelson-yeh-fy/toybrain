import React, { Component } from 'react'
import { Container, Tab } from 'semantic-ui-react'
import NcicMultiple from './ncic_multiple';
import CfsRelated from './cfsRelated';
import '../App.css';

class Ncic extends Component {
    state = {
    }
    
    render() {
        const tabpanes = [
            { menuItem: { key: '1', content: 'Multiple' }, render: () => <Tab.Pane inverted className='cfs-info-tabcontent' key='tabCfsSummary'><NcicMultiple /></Tab.Pane> },
            { menuItem: { key: '2', content: 'Vehicle' }, render: () => <Tab.Pane inverted className='cfs-info-tabcontent' key='tabCfsRelated'><CfsRelated /></Tab.Pane> },
            { menuItem: { key: '3', content: 'Person' }, render: () => <Tab.Pane inverted className='cfs-info-tabcontent' key='tabCfsMap'><CfsRelated /></Tab.Pane> },
            { menuItem: { key: '4', content: 'Article' }, render: () => <Tab.Pane inverted className='cfs-info-tabcontent' key='tabCfsMap'><CfsRelated /></Tab.Pane> },
            { menuItem: { key: '5', content: 'History' }, render: () => <Tab.Pane inverted className='cfs-info-tabcontent'  key='tabCfsMap'><CfsRelated /></Tab.Pane> },
          ];

        return (
            <Container textAlign='justified' fluid>
                <Tab menu={{ fluid: true, inverted: true, secondary: true, aligned:'right' }} renderActiveOnly={true} panes={tabpanes} />    
            </Container>
        )
    }
}

export default Ncic;
