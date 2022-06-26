/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { setNavigationToggle as setNavigationToggleFn } from 'store/navigation/actions';
// import JoinTheOlasTribe from '../HomePage/11JoinTheOlasTribe';
// import Banner from './Banner';
import Footer from './Footer';
import { LayoutGlobalStyle, Container } from './styles';

// const Navigation = dynamic(() => import('./Navigation'), {
//   ssr: false,
// });

const NavigationBar = ({ isNavigationOpen, setNavigationToggle, children }) => {
  const router = useRouter();
  const { pathname } = router;
  console.log({ pathname });

  return (
    <Container data-testid="home-page">
      {/* {pathname === '/' && <Banner />} */}
      {/* <Navigation
        isNavigationOpen={isNavigationOpen}
        setNavigationToggle={setNavigationToggle}
      /> */}
      <>{children}</>
      <LayoutGlobalStyle isNavigationOpen={isNavigationOpen} />
      <Footer />
      {/* <JoinTheOlasTribe /> */}
    </Container>
  );
};

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
