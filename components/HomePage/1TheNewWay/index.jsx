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
        <Link href="#build">
          <a href="#build">
            <Button type="purple" title="Start Building />" />
          </a>
        </Link>

        <Link href="#learn">
          <a href="#learn">
            <Button title="What is Autonolas" />
          </a>
        </Link>
      </div>
    </DescActionButtons>
  </SectionOne>
);

SectionOneBirthPlace.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
};

export default SectionOneBirthPlace;
