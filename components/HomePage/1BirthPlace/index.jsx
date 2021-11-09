import React from 'react';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
// import Navigation from './Navigation';
import { SectionOne } from '../styles';

const SectionOneBirthPlace = () => {
  // eslint-disable-next-line no-unused-vars
  const onNavigationClick = () => {
    window.console.log('hey!');
  };

  return (
    <SectionOne className="section section-1">
      {/* <Navigation /> */}
      <Header className="header" title="The Birthplace of Economic Autonomy" />
      <Description title="Autonolas enables developers to build self-owning self-operating, 100% trustless decentralized applications." />
      <Button type="primary" title="Join Discord" />
    </SectionOne>
  );
};

export default SectionOneBirthPlace;
