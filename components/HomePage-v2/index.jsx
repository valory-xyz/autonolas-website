/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HomePage = ({ isNavigationOpen }) => (
  <>
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
