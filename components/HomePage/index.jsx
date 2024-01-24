import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TheNewWay from './1TheNewWay';
import StartBuilding from './7StartBuilding';
import Blog from './13Blog';
import Experience from './14Experience';

const HomePage = ({
  isNavigationOpen,
  blogs,
}) => (
  <>
    <TheNewWay isNavigationOpen={isNavigationOpen} />
    <StartBuilding />
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
