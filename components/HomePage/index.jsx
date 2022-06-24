/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TheNewWay from './1TheNewWay';
import WhatIsAutonolas from './2WhatIsAutonolas';
import DecentralizedAndSophisticated from './3DecentralizedAndSophisticated';
import HowDoAutonolasWork from './4HowDoAutonolasWork';
import QuickIntroArticles from './5QuickIntroArticles';
import WhyBuildOnAutonolas from './6WhyBuildOnAutonolas';
import StartBuilding from './7StartBuilding';
import WhatCouldYouBuild from './8WhatCouldYouBuild';

const HomePage = ({ isNavigationOpen }) => (
  <>
    <WhatCouldYouBuild />
    {/*
    <TheNewWay isNavigationOpen={isNavigationOpen} />
    <WhatIsAutonolas />
    <DecentralizedAndSophisticated />
    <HowDoAutonolasWork />
    <QuickIntroArticles />
    <WhyBuildOnAutonolas />
    <StartBuilding />
    */}
  </>
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
