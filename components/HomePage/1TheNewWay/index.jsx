import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import { SectionOne, DescActionButtons } from './styles';

const SectionOneBirthPlace = ({ isNavigationOpen }) => (
  <SectionOne
    className="section section-1"
    id="banner"
    isNavigationOpen={isNavigationOpen}
  >
    <Header className="header" title="Build Autonomous Services" />

    <DescActionButtons>
      <Description
        type={2}
        title="Build, run and own autonomous services that power next-gen apps for crypto users and DAOs."
      />

      <div className="action-btns">
        <Link href="#build" passHref>
          <Button hasArrowSuffix type="purple" title="Start Building />" as="a" />
        </Link>

        <Link href="#what-are-autonomous-services" passHref>
          <Button title="What is Autonolas" as="a" type="black" />
        </Link>
      </div>
    </DescActionButtons>
  </SectionOne>
);

SectionOneBirthPlace.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
};

export default SectionOneBirthPlace;
