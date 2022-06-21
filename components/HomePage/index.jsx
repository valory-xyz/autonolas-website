import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TheNewWay from './1TheNewWay';
// import WhatIsAutonolas from './2WhatIsAutonolas';

const HomePage = ({ isNavigationOpen }) => (
  <>
    {/* <WhatIsAutonolas /> */}
    <TheNewWay isNavigationOpen={isNavigationOpen} />
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
