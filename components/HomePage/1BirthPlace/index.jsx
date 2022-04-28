import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { SectionOne } from './styles';

const SectionOneBirthPlace = ({ isNavigationOpen }) => (
  <SectionOne
    className="section section-1"
    id="birth-place"
    isNavigationOpen={isNavigationOpen}
  >
    <Header
      className="header"
      title={(
        <>
          <div>Let&apos;s Put the &apos;A&apos;</div>
          <div>Back in DAO</div>
        </>
      )}
    />
    <Description
      type={2}
      title="Autonolas enables DAOs to put an autonomous software service at the heart of their off-chain operations."
    />

    <div className="action-btns">
      <Button
        type="primary"
        title="Discuss Your Project"
        onClick={() => window.open('mailto:bd@valory.xyz')}
      />
      <Link href="#developers">
        <Button type="outline" title="Join Dev Academy" />
      </Link>
    </div>
  </SectionOne>
);

SectionOneBirthPlace.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
};

export default SectionOneBirthPlace;
