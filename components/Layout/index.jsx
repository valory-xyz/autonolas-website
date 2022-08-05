import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNavigationToggle as setNavigationToggleFn } from 'store/navigation/actions';
import Navigation from './Navigation';
import Footer from './Footer';
import { LayoutGlobalStyle, Container } from './styles';

const NavigationBar = ({ isNavigationOpen, setNavigationToggle, children }) => (
  <Container data-testid="home-page">
    <Navigation
      isNavigationOpen={isNavigationOpen}
      setNavigationToggle={setNavigationToggle}
    />
    <>{children}</>
    <LayoutGlobalStyle isNavigationOpen={isNavigationOpen} />
    <Footer />
  </Container>
);

NavigationBar.propTypes = {
  children: PropTypes.element,
  isNavigationOpen: PropTypes.bool.isRequired,
  setNavigationToggle: PropTypes.func.isRequired,
};

NavigationBar.defaultProps = {
  children: null,
};

const mapStateToProps = state => {
  const { isNavigationOpen } = state.navigation;
  return { isNavigationOpen };
};

const mapDispatchToProps = {
  setNavigationToggle: setNavigationToggleFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
