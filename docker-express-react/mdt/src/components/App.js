import React from 'react';
import Header from './HoCs/enhancedHeader';
import PageSwitcher from './HoCs/PageSwitcher';
import 'semantic-ui-css/semantic.min.css';

export default () => (
  <div>
    <Header />
    <PageSwitcher />
  </div>
);
