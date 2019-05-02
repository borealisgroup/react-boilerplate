import React from 'react';
import { HomeContent, MainTemplate, Header } from 'components';

const HomePage = () => (
  <MainTemplate
    header={<Header />}
    // sidebar={<Sidebar />}
    content={<HomeContent />}
  />
);

export default HomePage;
