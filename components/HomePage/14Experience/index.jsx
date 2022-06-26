import React from 'react';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { SectionExperience } from './styles';

const Experience = () => (
  <SectionExperience className="section section-experience" id="experience">
    <Description type={2} title="EXPERIENCE" className="desc-1" />
    <Header className="header" title="Enter Alter Orbis" />

    <Description type={2} title="Immerse yourself in Autonolas's lore." />

    <Button
      title="EXPERIENCE IT NOW"
      type="purple"
      onClick={() => window.open('https://docs.autonolas.network/')}
    />

    <div className="consider-yourself">
      <div>Consider yourself a world builder?</div>
      <a
        href="https://google.com"
        className=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Submit an addition
      </a>
    </div>
  </SectionExperience>
);

export default Experience;
