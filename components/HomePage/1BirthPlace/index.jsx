import React from 'react';
import PropTypes from 'prop-types';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { handleJoinDiscord } from 'common-util/functions';
import { SectionOne } from './styles';

const SectionOneBirthPlace = ({ isNavigationOpen }) => (
  <SectionOne
    className="section section-1"
    id="birth-place"
    isNavigationOpen={isNavigationOpen}
  >
    <Header className="header" title="The Birthplace of Economic Autonomy" />
    <Description
      type={2}
      title="Autonolas enables developers to build self-owning, self-operating, 100%
      trustless decentralized applications."
    />
    <Button type="primary" title="Join Discord" onClick={handleJoinDiscord} />
  </SectionOne>
);

SectionOneBirthPlace.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
};

export default SectionOneBirthPlace;
