import React from 'react';
import { Grid } from 'antd';
import Image from 'next/image';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { SectionExperience } from './styles';

const { useBreakpoint } = Grid;

const Experience = () => {
  const screens = useBreakpoint();

  return (
    <SectionExperience className="section section-experience" id="experience">
      <div className="header-row">
        <Image
          src="/images/14Experience/alter-orbis-logo.png"
          alt="Alter Orbis"
          width={screens.xs ? 65 : 100}
          height={screens.xs ? 72 : 110}
        />

        <Description type={2} title="EXPERIENCE" className="desc-1" />

        <Image
          src="/images/14Experience/alter-orbis-symbols.png"
          alt="Alter Orbis Symbol"
          className="img-2"
          width={screens.xs ? 112 : 300}
          height={screens.xs ? 30 : 80}
        />
      </div>
      <Header className="header" title="Enter Alter Orbis" />

      <Description type={2} title="Immerse yourself in Autonolas' lore" />

      <Button
        title="EXPERIENCE IT NOW"
        type="purple"
        onClick={() => window.open('https://autonolas.world/')}
      />

      <div className="consider-yourself" />
    </SectionExperience>
  );
};

export default Experience;
