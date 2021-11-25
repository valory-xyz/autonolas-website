import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { COLOR } from 'util/theme';
import { useCheckMobileScreen } from 'common-util/hooks';
import { getSocials } from 'common-util/functions';
import { AutonolasLogo } from 'common-util/svg';
import { NAV_1, NAV_2, NAVIGATION_SOCIALS } from './constants';
import {
  DesktopNavBar,
  Hamburger,
  MobileNavigationContainer,
  Container,
} from './styles';

const getNavigationsMenu = (menuList, callback, suffix = '') => menuList.map(eachNav => {
  const mapKey = `navigation-id-${eachNav.id}-${suffix}`;
  const isRedirect = !!eachNav.url;
  const isIcon = eachNav.type === 'icon';
  const title = isIcon ? (
    <Image
      src={`/images/common/${eachNav.iconName}.svg`}
      alt={`${eachNav.iconName} Icon`}
      width={24}
      height={24}
    />
  ) : (
    eachNav.name
  );

  return (
    <li className="nav-item" key={mapKey}>
      <a
        href={isRedirect ? eachNav.url : `#${eachNav.id}`}
        className="nav-link"
        target={isRedirect ? '_blank' : '_self'}
        rel="noopener noreferrer"
        onClick={() => {
          callback(false);
          return true;
        }}
      >
        {title}
      </a>
    </li>
  );
});

const Navigation = ({ isNavigationOpen, setNavigationToggle }) => {
  const [isTransparent, setColorchange] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setColorchange(false);
      } else {
        setColorchange(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* temporary variables */
  const isMobile = useCheckMobileScreen();
  const navbarClassName = () => {
    let name = 'navbar';
    if (isMobile) {
      name += ' mobile';
      if (isNavigationOpen) {
        name += ' is-open-for-mobile';
      }
      return name;
    }

    return `${name} desktop`;
  };

  return (
    <Container
      style={{
        backgroundColor: isTransparent ? 'transparent' : COLOR.WHITE,
        top: isTransparent ? '64px' : '0px',
      }}
      navHeight={isNavigationOpen && isTransparent ? 56 : 0}
    >
      <nav className={`navbar ${navbarClassName()}`}>
        {isMobile ? (
          <>
            {isNavigationOpen ? (
              <>
                <ul className="nav-menu">
                  {isNavigationOpen
                    ? getNavigationsMenu(
                      [
                        ...NAV_1,
                        ...[...NAV_2].filter(({ type }) => type !== 'icon'),
                      ],
                      setNavigationToggle,
                      'mobile',
                    )
                    : null}
                </ul>
                {getSocials(NAVIGATION_SOCIALS)}
              </>
            ) : (
              <MobileNavigationContainer>
                <a href="#banner" className="nav-logo" aria-label="Autonolas logo">
                  <AutonolasLogo width={124} height={54} />
                </a>
              </MobileNavigationContainer>
            )}

            <Hamburger
              aria-label="Navbar menu"
              role="button"
              tabIndex={0}
              onClick={() => setNavigationToggle(!isNavigationOpen)}
              onKeyDown={() => setNavigationToggle(!isNavigationOpen)}
            >
              <span />
              <span />
            </Hamburger>
          </>
        ) : (
          <DesktopNavBar>
            <ul className="nav-menu">
              {getNavigationsMenu(NAV_1, setNavigationToggle)}
            </ul>
            <div className="nav-item-logo">
              <a
                href="#banner"
                className="nav-link"
                aria-label="Autonolas Logo"
              >
                <AutonolasLogo width={124} height={60} />
              </a>
            </div>
            <ul className="nav-menu">
              {getNavigationsMenu(NAV_2, setNavigationToggle)}
            </ul>
          </DesktopNavBar>
        )}
      </nav>
    </Container>
  );
};

Navigation.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  setNavigationToggle: PropTypes.func.isRequired,
};

export default Navigation;
