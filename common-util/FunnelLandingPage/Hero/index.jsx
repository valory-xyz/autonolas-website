import React from 'react';
import PropTypes from 'prop-types';
import Description from 'common-util/Description';
import Header from 'common-util/Header';
import CallToActionButton from './CallToActionButton';
import { HeroSection, DescActionButtons } from './styles';

const Hero = ({
  isNavigationOpen, title, subtitle, href, btnText,
}) => (
  <HeroSection
    className="section section-1"
    id="banner"
    isNavigationOpen={isNavigationOpen}
  >
    <Header className="header" title={title} />

    <DescActionButtons>
      <Description type={2} title={subtitle || ''} />

      <div className="action-btn">
        <CallToActionButton href={href} btnText={btnText} />
      </div>
    </DescActionButtons>
  </HeroSection>
);

Hero.propTypes = {
  isNavigationOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  href: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  isNavigationOpen: false,
  subtitle: '',
};

export default Hero;
