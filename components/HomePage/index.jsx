import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BirthPlace from './1BirthPlace';
import WhyAutonolas from './2WhyAutonolas';
import WhatIsAutonolas from './3WhatIsAutonolas';
import WhatAreWeBuilding from './4WhatAreWeBuilding';
import YourHeadstartIn from './5YourHeadstartIn';
import LearnToBuild from './6LearnToBuild';
import DoYourLifesWork from './7DoYourLifesWork';
import PhaseShiftInDapp from './8PhaseShiftInDapp';
import Lore from './9Lore';
import About from './10About';
import JoinTheOlasTribe from './11JoinTheOlasTribe';

import { Container } from './styles';

const HomePage = ({ isNavigationOpen }) => (
  <Container data-testid="home-page">
    <BirthPlace isNavigationOpen={isNavigationOpen} />

    <WhyAutonolas />

    <WhatIsAutonolas />

    <WhatAreWeBuilding />

    <YourHeadstartIn />

    <LearnToBuild />

    <DoYourLifesWork />

    <PhaseShiftInDapp />

    <Lore />

    <About />

    <JoinTheOlasTribe />
  </Container>
);

HomePage.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { isNavigationOpen } = state.navigation;
  return { isNavigationOpen };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
