/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TheNewWay from '../1TheNewWay';
import ScaleYourDao from '../1ScaleYourDao';
import WhoDoesAutonolasHelp from './1WhoDoesAutonolasHelp';
import WhatIsAutonolas from '../2WhatIsAutonolas';
import DecentralizedAndSophisticated from '../3DecentralizedAndSophisticated';
import HowDoAutonolasWork from '../4HowDoAutonolasWork';
import QuickIntroArticles from '../5QuickIntroArticles';
import WhyBuildOnAutonolas from '../6WhyBuildOnAutonolas';
import StartBuilding from '../7StartBuilding';
import WhatCouldYouBuild from '../8WhatCouldYouBuild';
import Products from '../9Products';
import Mission from '../9Mission';
import Team from '../11Team';
import Press from '../12Press';
import Blog from '../13Blog';
import Experience from '../14Experience';
import { LearnContainer } from '../styles';

export const LEARN_LIST = [
  { name: 'Who benefits from Autonolas?', id: 'abcd' },
  { name: 'What is Autonolas?', id: 'abcd' },
  { name: 'What are autonomous services?', id: 'abcd' },
  { name: 'How do autonomous services work?', id: 'abcd' },
  { name: 'Quick intro articles', id: 'abcd' },
  { name: 'Why build on Autonolas?', id: 'abcd' },
  { name: 'What could you build?', id: 'abcd' },
  { name: 'What’s our mission?', id: 'abcd' },
];

const Learn = ({
  isNavigationOpen,
  educationArticles,
  ideas,
  cofounders,
  foundingTeam,
  press,
  blogs,
}) => (
  <>
    <TheNewWay isNavigationOpen={isNavigationOpen} />

    <LearnContainer>
      <ScaleYourDao />
      <WhoDoesAutonolasHelp />
      <WhatIsAutonolas />
      <DecentralizedAndSophisticated />
      <HowDoAutonolasWork />
      <QuickIntroArticles educationArticles={educationArticles} />
    </LearnContainer>

    <WhyBuildOnAutonolas />
    <WhatCouldYouBuild />
    <StartBuilding />
    <Products />
    <Mission />
    <Team cofounders={cofounders} foundingTeam={foundingTeam} />
    <Press press={press} />
    <Blog blogs={blogs} />
    <Experience />
  </>
);

Learn.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  educationArticles: PropTypes.instanceOf(Array),
  ideas: PropTypes.instanceOf(Array),
  cofounders: PropTypes.instanceOf(Array),
  foundingTeam: PropTypes.instanceOf(Array),
  press: PropTypes.instanceOf(Array),
  blogs: PropTypes.instanceOf(Array),
};

Learn.defaultProps = {
  educationArticles: [],
  ideas: [],
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

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
