import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { COLOR } from 'util/theme';
import Button from 'common-util/Button';
import { useCheckMobileScreen } from 'common-util/hooks';
import { getSocials } from 'common-util/functions';
import { AutonolasLogo } from 'common-util/svg';
import { NAV_1, NAV_2, NAVIGATION_SOCIALS } from './constants';
import {
  DesktopNavBar,
  Hamburger,
  MobileNavigationContainer,
  NavMenu,
  Container,
} from './styles';

const getNavigationsMenu = (menuList, callback, suffix = '') => menuList.map(eachNav => {
  const mapKey = `navigation-id-${eachNav.id}-${suffix}`;
  const externalLink = !!eachNav.url;
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
        href={externalLink ? eachNav.url : `/#${eachNav.id}`}
        className="nav-link"
        target={externalLink ? '_blank' : '_self'}
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

const Navigation = ({ isNavigationOpen, setNavigationToggle: navToggle }) => {
  const [isTransparent, setColorchange] = useState(true);
  const router = useRouter();
  const { pathname } = router;

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
  const mobileMenu = [
    ...NAV_1,
    ...[...NAV_2].filter(({ type }) => type !== 'icon'),
  ];
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
    // show tranparent navbar only on home page
    if (pathname === '/') {
      return {
        backgroundColor: isTransparent ? 'transparent' : COLOR.WHITE,
        top: '0px',
      };
    }

    return { backgroundColor: COLOR.WHITE, position: 'relative' };
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
        {isMobile ? (
          <>
            {isNavigationOpen ? (
              <>
                <NavMenu>
                  {isNavigationOpen
                    && getNavigationsMenu(mobileMenu, navToggle, 'mobile')}
                </NavMenu>
                {getSocials(NAVIGATION_SOCIALS)}
              </>
            ) : (
              <MobileNavigationContainer>
                <a
                  href="#banner"
                  className="nav-logo"
                  aria-label="Autonolas logo"
                >
                  <AutonolasLogo width={124} height={54} />
                </a>
              </MobileNavigationContainer>
            )}

            <Hamburger
              aria-label="Navbar menu"
              role="button"
              tabIndex={0}
              onClick={() => navToggle(!isNavigationOpen)}
              onKeyDown={() => navToggle(!isNavigationOpen)}
            >
              <span />
              <span />
            </Hamburger>
          </>
        ) : (
          <DesktopNavBar>
            <div className="nav-item-logo">
              <a
                href="#banner"
                className="nav-link"
                aria-label="Autonolas Logo"
              >
                <AutonolasLogo width={124} height={60} />
              </a>
            </div>
            <NavMenu>{getNavigationsMenu(NAV_1, navToggle)}</NavMenu>
            <Button
              type="purple"
              // className="mini"
              title="Start Building />"
              onClick={() => window.open('mailto:bd@valory.xyz')}
            />
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
