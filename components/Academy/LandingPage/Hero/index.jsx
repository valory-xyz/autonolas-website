import React from 'react';
import PropTypes from 'prop-types';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import { HeroSection, DescActionButtons } from './styles';
import CallToActionButton from '../CallToActionButton';

const Hero = ({ isNavigationOpen }) => (
  <HeroSection
    className="section section-1"
    id="banner"
    isNavigationOpen={isNavigationOpen}
  >
    <Header
      className="header"
      title={(
        <>
          Autonolas
          <br />
          Academy
        </>
      )}
    />

    <DescActionButtons>
      <Description
        type={2}
        title="Learn to build and run your own autonomous services"
      />

      <div className="action-btns">
        <CallToActionButton />
      </div>
    </DescActionButtons>
  </HeroSection>
);

Hero.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
};

export default Hero;
