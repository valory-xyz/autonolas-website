import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { connect } from 'react-redux';
import Content from './Content';
import Hero from './Hero';
import Why from './Why';
import Summary from './Summary';
import { Body } from './styles';

const LandingPage = ({ isNavigationOpen }) => (
  <>
    <Hero isNavigationOpen={isNavigationOpen} />
    <Body>
      <Why />
      <Divider className="custom-divider" />
      <Content />
      <Divider className="custom-divider" />
      <Summary />
    </Body>
  </>
);

LandingPage.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { isNavigationOpen } = state.navigation;
  return { isNavigationOpen };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
