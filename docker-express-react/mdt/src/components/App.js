import React from 'react';
// import Header from './HoCs/enhancedHeader';
import Header from './Header';
import PageSwitcher from './PageSwitcher';
import 'semantic-ui-css/semantic.min.css';

export default () => (
  <div>
    <Header />
    <PageSwitcher />
  </div>
);
