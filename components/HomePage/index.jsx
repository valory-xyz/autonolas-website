import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TheNewWay from './1TheNewWay';
import ScaleYourDao from './1ScaleYourDao';
import StartBuilding from './7StartBuilding';
import Products from './9Products';
import Team from './11Team';
import Press from './12Press';
import Blog from './13Blog';
import Experience from './14Experience';
import { LearnContainer } from './styles';

const HomePage = ({
  isNavigationOpen,
  cofounders,
  foundingTeam,
  press,
  blogs,
}) => (
  <>
    <TheNewWay isNavigationOpen={isNavigationOpen} />

    <LearnContainer>
      <ScaleYourDao />
    </LearnContainer>

    <StartBuilding />
    <Products />
    <Team cofounders={cofounders} foundingTeam={foundingTeam} />
    <Press press={press} />
    <Blog blogs={blogs} />
    <Experience />
  </>
);

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
