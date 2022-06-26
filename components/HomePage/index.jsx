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
import Mission from './9Mission';
import Team from './11Team';
import Press from './12Press';
import Blog from './13Blog';
import Experience from './14Experience';

const HomePage = ({
  isNavigationOpen,
  cofounders,
  foundingTeam,
  press,
  blogs,
}) => {
  console.log(blogs);
  return (
    <>
      {/*
    <TheNewWay isNavigationOpen={isNavigationOpen} />
    <WhatIsAutonolas />
    <DecentralizedAndSophisticated />
    <HowDoAutonolasWork />
    <QuickIntroArticles />
    <WhyBuildOnAutonolas />
    <StartBuilding />
    <WhatCouldYouBuild />
    <Mission />
    <Team cofounders={cofounders} foundingTeam={foundingTeam} />
      <Press press={press} />
      <Blog  blogs={blogs} />
      <Experience />
    */}
    </>
  );
};

HomePage.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  cofounders: PropTypes.instanceOf(Array),
  foundingTeam: PropTypes.instanceOf(Array),
  press: PropTypes.instanceOf(Array),
  blogs: PropTypes.instanceOf(Array),
};

HomePage.defaultProps = {
  cofounders: [],
  foundingTeam: [],
  press: [],
  blogs: [],
};

const mapStateToProps = state => {
  const { isNavigationOpen } = state.navigation;
  return { isNavigationOpen };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
