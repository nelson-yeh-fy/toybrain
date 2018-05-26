import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import CFSAbstract from '../CFSAbstract';
import CFSRelated from '../CFSRelated';
import NCICMultiple from '../NcicMultiple';
import '../../assets/App.css';

const tabpanes = [
  { menuItem: { key: '1', content: 'Multiple' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsSummary"><NCICMultiple /></Tab.Pane> },
  { menuItem: { key: '2', content: 'Vehicle' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsRelated"><CFSRelated /></Tab.Pane> },
  { menuItem: { key: '3', content: 'Person' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsMap"><CFSRelated /></Tab.Pane> },
  { menuItem: { key: '4', content: 'Article' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsMap"><CFSRelated /></Tab.Pane> },
  { menuItem: { key: '5', content: 'History' }, render: () => <Tab.Pane className="cfs-info-tabcontent" key="tabCfsMap"><CFSRelated /></Tab.Pane> },
];

const Ncic = () => (
  <Container textAlign="justified" fluid>
    <CFSAbstract />
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
