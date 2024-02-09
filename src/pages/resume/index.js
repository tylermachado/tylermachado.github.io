import React from 'react';
import Accordion from '../../components/accordion'
import Navbar from '../../components/navbar'
import './index.scss';

const Resume = () => (
  <>
    <Navbar />
    <Accordion
      title="Alley"
      subtitle="UX Developer II, March 2021-present"
      content="llorem ipsum"
    />
  </>
);

export default Resume;
