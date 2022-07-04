import React from 'react';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { SectionExperience } from './styles';

const Experience = () => (
  <SectionExperience className="section section-experience" id="experience">
    <div className="header-row">
      <img src="/images/14Experience/alter-orbis-logo.png" alt="Alter Orbis" className="img-1" />

      <Description type={2} title="EXPERIENCE" className="desc-1" />

      <img
        src="/images/14Experience/alter-orbis-symbols.png"
        alt="Alter Orbis Symbol"
        className="img-2"
      />
    </div>
    <Header className="header" title="Enter Alter Orbis" />

    <Description type={2} title="Immerse yourself in Autonolas's lore." />

    <Button
      title="EXPERIENCE IT NOW"
      type="purple"
      onClick={() => window.open('https://autonolas.world/')}
    />

    <div className="consider-yourself" />
  </SectionExperience>
);

export default Experience;
/*

  <div>Consider yourself a world builder?</div>
  <a
    href="https://google.com"
    className=""
    target="_blank"
    rel="noopener noreferrer"
  >
    Submit an addition
  </a>
*/
