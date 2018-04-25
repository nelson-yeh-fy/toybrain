import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import CfsAbstract from '../components/cfsInfo/cfsAbstract';
import CfsRelated from '../components/cfsRelated';
import NcicMultiple from '../components/ncic_multiple';
import '../assets/App.css';

const tabpanes = [
  { menuItem: { key: '1', content: 'Multiple' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsSummary"><NcicMultiple /></Tab.Pane> },
  { menuItem: { key: '2', content: 'Vehicle' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsRelated"><CfsRelated /></Tab.Pane> },
  { menuItem: { key: '3', content: 'Person' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsMap"><CfsRelated /></Tab.Pane> },
  { menuItem: { key: '4', content: 'Article' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsMap"><CfsRelated /></Tab.Pane> },
  { menuItem: { key: '5', content: 'History' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsMap"><CfsRelated /></Tab.Pane> },
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
