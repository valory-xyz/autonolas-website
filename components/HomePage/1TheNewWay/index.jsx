import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import { SITE_DESCRIPTION, SITE_TAGLINE } from 'common-util/site-constants';
import { SectionOne, DescActionButtons } from './styles';

const SectionOneBirthPlace = ({ isNavigationOpen }) => (
  <SectionOne
    className="section section-1"
    id="banner"
    isNavigationOpen={isNavigationOpen}
  >
    <Header className="header" title={SITE_TAGLINE} as="h1" />

    <DescActionButtons>
      <Description
        type={2}
        title={SITE_DESCRIPTION}
      />

      <div className="action-btns">
        <Link href="#build" passHref>
          <a>
            <Button hasArrowSuffix type="purple" title="Start Building" />
          </a>
        </Link>

        <Link href="#learn" passHref>
          <a>
            <Button title="What is Autonolas?" type="black" />
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
