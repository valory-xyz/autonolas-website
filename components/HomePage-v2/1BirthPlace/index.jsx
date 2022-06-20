import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Description from '../components/Description';
import Button from '../components/Button';
import Header from '../components/Header';
import { SectionOne, DescActionButtons } from './styles';

const SectionOneBirthPlace = ({ isNavigationOpen }) => (
  <SectionOne
    className="section section-1"
    id="birth-place"
    isNavigationOpen={isNavigationOpen}
  >
    <Header
      className="header"
      title="The New Way To Get Things Done In Crypto"
    />

    <DescActionButtons>
      <Description
        type={2}
        title="Build, run and own autonomous services that power next-gen apps for crypto users and DAOs."
      />

      <div className="action-btns">
        <Button
          type="purple"
          title="Start Building />"
          onClick={() => window.open('mailto:bd@valory.xyz')}
        />

        {/* TODO */}
        <Link href="#developers">
          <Button title="What is Autonolas" />
        </Link>
      </div>
    </DescActionButtons>
  </SectionOne>
);

SectionOneBirthPlace.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
};

export default SectionOneBirthPlace;
