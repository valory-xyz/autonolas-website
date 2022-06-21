import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TheNewWay from './1TheNewWay';
import WhatIsAutonolas from './2WhatIsAutonolas';
import DecentralizedAndSophisticated from './3DecentralizedAndSophisticated';

const HomePage = ({ isNavigationOpen }) => (
  <>
    <TheNewWay isNavigationOpen={isNavigationOpen} />
    <WhatIsAutonolas />
    <DecentralizedAndSophisticated />
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
