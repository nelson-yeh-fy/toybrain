import React from 'react';
import { Container, Label, Header } from 'semantic-ui-react';
import '../../assets/App.css';

const CfsAbstract = () => (
  <Container textAlign="justified" fluid style={{ paddingBottom: 15 }}>
    <Header size="large">102 SUNSET BOULEVARD, WEST CAPE MAY, NJ 08204
      <Label size="medium" color="green" horizontal>Verified</Label>
      <Label size="medium" color="red" horizontal>P1 - Residential Fire</Label>
    </Header>
  </Container>
);

export default CfsAbstract;
