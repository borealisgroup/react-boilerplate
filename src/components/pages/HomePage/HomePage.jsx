import React from 'react';
import { HomeContent, MainTemplate, Header, Sidebar } from 'components';

const HomePage = () => (
  <MainTemplate
    header={<Header />}
    sidebar={<Sidebar />}
    content={<HomeContent />}
  />
);

export default HomePage;
