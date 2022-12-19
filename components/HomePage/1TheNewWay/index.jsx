import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'common-util/Button';
import { Typography } from 'antd';
import Header from 'common-util/Header';
import { SITE_TAGLINE } from 'util/constants/site';
import ReactTextRotator from 'react-text-rotator';
import { SectionOne, DescActionButtons } from './styles';

const content = [
  {
    text: 'DAO Ops',
    className: 'text-rotator-text',
  },
  {
    text: 'DevOps',
    className: 'text-rotator-text',
  },
  {
    text: 'Product Ops',
    className: 'text-rotator-text',
  },
  {
    text: 'Growth Ops',
    className: 'text-rotator-text',
  },
];


const SectionOneBirthPlace = ({ isNavigationOpen }) => (
  <SectionOne
    className="section section-1"
    id="banner"
    isNavigationOpen={isNavigationOpen}
  >
    <Header className="header" title={SITE_TAGLINE} as="h1" />
    <DescActionButtons>
      <Typography.Title level={4} className="lead">
        Our open-source software stack enables you to run your
        {' '}
        <div className="text-rotator-container">
          <ReactTextRotator content={content} time={2500} startDelay={250} transitionTime={500} />
        </div>
        {' '}
        as a unified, decentralized off-chain system.
      </Typography.Title>
      <div className="action-btns">
        <Link href="/#ecosystem-builders" passHref>
          <a>
            <Button hasArrowSuffix type="purple" title="Get support with your project" />
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
