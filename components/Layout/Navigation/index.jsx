import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { COLOR } from 'util/theme';
import Button from 'common-util/Button';
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

  const handleClick = () => {
    callback(false);
    return true;
  };

  return (
    <li className="nav-item" key={mapKey}>
      <Link href={externalLink ? eachNav.url : `/#${eachNav.id}`} passHref>
        <a
          className="nav-link"
          target={externalLink ? '_blank' : '_self'}
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

const startBuildingBtn = (
  <Link href="/#build" passHref>
    <a>
      <Button type="purple" title="Start Building" />
    </a>
  </Link>
);

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
    // show tranparent navbar if inner page
    if (!get(query, 'id')) {
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
        {!isNavigationOpen && (
          <Banner>
            <div>
              <span role="img" aria-label="Star">
                ⭐ ⭐ ⭐
              </span>
              &nbsp;Show off your contributions to Autonolas! Mint a badge which
              evolves as you earn contribution points.&nbsp;
            </div>
            <Button
              type="black"
              className="mini"
              title="Mint badge"
              onClick={() => window.open('https://contribute.autonolas.network')}
            />
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

                {startBuildingBtn}
              </MobileNavBox>
            )}
          </>
        ) : (
          <DesktopNavBar>
            <div className="nav-item-logo">{logo}</div>
            <NavMenu>{getNavigationsMenu(NAV_1, navToggle)}</NavMenu>
            {startBuildingBtn}
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
