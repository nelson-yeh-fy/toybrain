import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import CfsAbstract from '../components/cfsAbstract';
import ncicMultiple from './ncic_multiple';
import cfsRelated from './cfsRelated';
import '../assets/App.css';

const tabpanes = [
  { menuItem: { key: '1', content: 'Multiple' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsSummary"><ncicMultiple /></Tab.Pane> },
  { menuItem: { key: '2', content: 'Vehicle' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsRelated"><cfsRelated /></Tab.Pane> },
  { menuItem: { key: '3', content: 'Person' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsMap"><cfsRelated /></Tab.Pane> },
  { menuItem: { key: '4', content: 'Article' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsMap"><cfsRelated /></Tab.Pane> },
  { menuItem: { key: '5', content: 'History' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsMap"><cfsRelated /></Tab.Pane> },
];

const Ncic = () => (
  <Container textAlign="justified" fluid>
    <CfsAbstract />
    <Tab
      menu={{
        fluid: true, secondary: true, aligned: 'right',
      }}
      renderActiveOnly
      panes={tabpanes}
    />
  </Container>
);

export default Ncic;
