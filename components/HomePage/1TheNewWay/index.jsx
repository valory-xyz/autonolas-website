import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import { SectionOne, DescActionButtons } from './styles';
import { SITE_DESCRIPTION, SITE_TAGLINE } from 'common-util/site-constants';

const SectionOneBirthPlace = ({ isNavigationOpen }) => (
  <SectionOne
    className="section section-1"
    id="banner"
    isNavigationOpen={isNavigationOpen}
  >
    <Header className="header" title={SITE_TAGLINE} />

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

        <Link href="#what-are-autonomous-services" passHref>
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
