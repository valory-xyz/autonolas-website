import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import {
  SITE_DESCRIPTION_PART_1,
  SITE_DESCRIPTION_PART_2,
  SITE_TAGLINE,
} from 'util/constants/site';
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
        title={(
          <>
            {SITE_DESCRIPTION_PART_1}
            &nbsp;
            <span className="bold" style={{ display: 'inline-block' }}>
              and
            </span>
            &nbsp;
            {SITE_DESCRIPTION_PART_2}
          </>
        )}
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
