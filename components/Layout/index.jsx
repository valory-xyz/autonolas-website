import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { setNavigationToggle as setNavigationToggleFn } from 'store/navigation/actions';
import Banner from './Banner';
import { LayoutGlobalStyle } from './styles';

const Navigation = dynamic(() => import('./Navigation'), {
  ssr: false,
});

const NavigationBar = ({ isNavigationOpen, setNavigationToggle, children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      {pathname === '/' && <Banner />}
      <Navigation
        isNavigationOpen={isNavigationOpen}
        setNavigationToggle={setNavigationToggle}
      />
      <>{children}</>
      <LayoutGlobalStyle isNavigationOpen={isNavigationOpen} />
    </>
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
