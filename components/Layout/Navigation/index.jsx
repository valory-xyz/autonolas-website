import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { COLOR } from 'util/theme';
import { useCheckMobileScreen } from 'common-util/hooks/useCheckMobileScreen';
import { getSocials } from 'common-util/functions';
import { AutonolasLogo } from 'common-util/svg';
import { NAV_1, NAVIGATION_SOCIALS } from './constants';
import {
  DesktopNavBar,
  Hamburger,
  MobileNavigationContainer,
  MobileCloseMenu,
  NavMenu,
  Container,
  Banner,
  MobileNavBox,
} from './styles';

const getNavigationsMenu = (menuList, callback, suffix = '') => menuList.map(eachNav => {
  const mapKey = `navigation-id-${eachNav.id}-${suffix}`;
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

  const handleClick = () => {
    callback(false);
    return true;
  };

  return (
    <li className="nav-item" key={mapKey}>
      <Link href={eachNav.url ? eachNav.url : `/#${eachNav.id}`} passHref>
        <a
          className="nav-link"
          target={eachNav.isExternal ? '_blank' : '_self'}
          rel="noopener noreferrer"
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          {title}
        </a>
      </Link>
    </li>
  );
});

const logo = (
  <a className="nav-link" href="/" aria-label="Autonolas Logo">
    <AutonolasLogo width={124} height={60} />
  </a>
);

const Navigation = ({ isNavigationOpen, setNavigationToggle: navToggle }) => {
  const [isTransparent, setColorchange] = useState(true);
  const router = useRouter();
  const { pathname, query } = router;

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
  const mobileMenu = [...NAV_1];
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

  const getNavStyle = () => {
    const relativeStyle = {
      backgroundColor: COLOR.WHITE,
      position: 'relative',
    };
    // show tranparent navbar if inner page
    if (!get(query, 'id')) {
      return {
        backgroundColor: isTransparent ? 'transparent' : COLOR.WHITE,
        top: '0px',
      };
    }

    return relativeStyle;
  };

  const getNavHeight = () => {
    // 100% height on nav if it is not home-page
    if (pathname !== '/') {
      return 0;
    }

    return isNavigationOpen && isTransparent ? 56 : 0;
  };

  return (
    <Container style={getNavStyle()} navHeight={getNavHeight()}>
      <nav className={`navbar ${navbarClassName()}`}>
        {!isNavigationOpen && (
          <Banner>
            <div>
              <span role="img" aria-label="Star">
                ✨
              </span>
              &nbsp;This is a developer resource provided by&nbsp;
              <a
                href="https://valory.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Valory
              </a>
              &nbsp;to the Autonolas ecosystem. The views expressed herein do
              not represent those of the Autonolas DAO. To visit the Autonolas
              DAO go to&nbsp;
              <a
                href="https://olas.network"
                target="_blank"
                rel="noopener noreferrer"
              >
                Olas network
              </a>
              .
            </div>
          </Banner>
        )}

        {isMobile ? (
          <>
            {isNavigationOpen ? (
              <>
                <MobileCloseMenu>
                  <div className="close-menu-logo">{logo}</div>
                  <div
                    className="close-menu-text"
                    aria-label="Navbar menu close"
                    role="button"
                    tabIndex={0}
                    onClick={() => navToggle(false)}
                    onKeyDown={() => navToggle(false)}
                  >
                    CLOSE
                  </div>
                </MobileCloseMenu>

                <NavMenu>
                  {isNavigationOpen
                    && getNavigationsMenu(mobileMenu, navToggle, 'mobile')}
                </NavMenu>

                {getSocials(NAVIGATION_SOCIALS)}
              </>
            ) : (
              <MobileNavBox>
                <MobileNavigationContainer>
                  <a href="/" className="nav-logo" aria-label="Autonolas logo">
                    <AutonolasLogo width={124} height={54} />
                  </a>
                </MobileNavigationContainer>

                <Hamburger
                  aria-label="Navbar menu open"
                  role="button"
                  tabIndex={0}
                  onClick={() => navToggle(true)}
                  onKeyDown={() => navToggle(true)}
                >
                  MENU
                </Hamburger>

              </MobileNavBox>
            )}
          </>
        ) : (
          <DesktopNavBar>
            <div className="nav-item-logo">{logo}</div>
            <NavMenu>{getNavigationsMenu(NAV_1, navToggle)}</NavMenu>
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
