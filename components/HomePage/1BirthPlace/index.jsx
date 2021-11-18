import React from 'react';
import PropTypes from 'prop-types';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import { handleJoinDiscord } from 'common-util/functions';
// import Navigation from './Navigation';
import dynamic from 'next/dynamic';
import { SectionOne } from '../styles';

const Navigation = dynamic(() => import('./Navigation'), { ssr: false });

const SectionOneBirthPlace = ({
  isNavigationOpen,
  setNavigationToggle,
}) => (
  <SectionOne className="section section-1" id="birth-place" isNavigationOpen={isNavigationOpen}>
    <Navigation isNavigationOpen={isNavigationOpen} setNavigationToggle={setNavigationToggle} />
    <Header className="header" title="The Birthplace of Economic Autonomy" />
    <div className="description-l-2">Autonolas enables developers to build self-owning, self-operating, 100% trustless decentralized applications.</div>

    <Button type="primary" title="Join Discord" onClick={handleJoinDiscord} />
  </SectionOne>
);

SectionOneBirthPlace.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  setNavigationToggle: PropTypes.func.isRequired,
};

export default SectionOneBirthPlace;
