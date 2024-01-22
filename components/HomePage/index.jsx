import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TheNewWay from './1TheNewWay';
import ScaleYourDao from './1ScaleYourDao';
import StartBuilding from './7StartBuilding';
import Products from './9Products';
import EcosystemBuilders from './11EcosystemBuilders';
import Contribute from './12Contribute';
import Blog from './13Blog';
import Experience from './14Experience';

const HomePage = ({
  isNavigationOpen,
  blogs,
}) => (
  <>
    <TheNewWay isNavigationOpen={isNavigationOpen} />
    <ScaleYourDao />
    <Products />
    <StartBuilding />
    <EcosystemBuilders />
    <Contribute />
    <Blog blogs={blogs} />
    <Experience />
  </>
);

HomePage.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  blogs: PropTypes.instanceOf(Array),
};

HomePage.defaultProps = {
  blogs: [],
};

const mapStateToProps = state => {
  const { isNavigationOpen } = state.navigation;
  return { isNavigationOpen };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
