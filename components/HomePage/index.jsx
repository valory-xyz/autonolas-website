/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TheNewWay from './1TheNewWay';
import WhoDoesAutonolasHelp from './1WhoDoesAutonolasHelp';
import WhatIsAutonolas from './2WhatIsAutonolas';
import DecentralizedAndSophisticated from './3DecentralizedAndSophisticated';
import HowDoAutonolasWork from './4HowDoAutonolasWork';
import QuickIntroArticles from './5QuickIntroArticles';
import WhyBuildOnAutonolas from './6WhyBuildOnAutonolas';
import StartBuilding from './7StartBuilding';
import Mission from './9Mission';
import Testimonials from './10Testimonials';
import Team from './11Team';
import Press from './12Press';
import Blog from './13Blog';
import Experience from './14Experience';
import { LearnContainer } from './styles';
import WhatCouldYouBuild from './8WhatCouldYouBuild';
import EcosystemServices from './10EcosystemServiceAndHelpGrow';

const HomePage = ({
  isNavigationOpen,
  educationArticles,
  ideas,
  cofounders,
  foundingTeam,
  press,
  blogs,
  testimonials,
}) => (
  <>
    <TheNewWay isNavigationOpen={isNavigationOpen} />

    <LearnContainer>
      <WhoDoesAutonolasHelp />
      <WhatIsAutonolas />
      <DecentralizedAndSophisticated />
      <HowDoAutonolasWork />
      <QuickIntroArticles educationArticles={educationArticles} />
    </LearnContainer>

    <WhyBuildOnAutonolas />
    <WhatCouldYouBuild />
    <StartBuilding />
    <Mission />
    <EcosystemServices />
    <Testimonials testimonials={testimonials} />
    <Team cofounders={cofounders} foundingTeam={foundingTeam} />
    <Press press={press} />
    <Blog blogs={blogs} />
    <Experience />
  </>
);

HomePage.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  educationArticles: PropTypes.instanceOf(Array),
  ideas: PropTypes.instanceOf(Array),
  cofounders: PropTypes.instanceOf(Array),
  foundingTeam: PropTypes.instanceOf(Array),
  press: PropTypes.instanceOf(Array),
  blogs: PropTypes.instanceOf(Array),
  testimonials: PropTypes.instanceOf(Array),
};

HomePage.defaultProps = {
  educationArticles: [],
  ideas: [],
  cofounders: [],
  foundingTeam: [],
  press: [],
  blogs: [],
  testimonials: [],
};

const mapStateToProps = state => {
  const { isNavigationOpen } = state.navigation;
  return { isNavigationOpen };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
