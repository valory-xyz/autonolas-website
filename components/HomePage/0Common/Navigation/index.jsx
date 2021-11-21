import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCheckMobileScreen } from 'common-util/hooks';
import { COLOR } from 'util/theme';
import { getSocials } from 'common-util/functions';
import { Hamburger, MobileNavigationContainer, Container } from './styles';

const NAV_1 = [
  { name: 'Why?', id: 'why-autonolas' },
  { name: 'What?', id: 'what-is-autonolas' },
  { name: 'Developers', id: 'developers' },
  { name: 'Community', id: 'community' },
];

const NAV_2 = [
  { name: 'Product', id: 'product' },
  { name: 'Lore', id: 'lore' },
  { name: 'About', id: 'about' },
  {
    name: '',
    id: 'twitter-redirect',
    type: 'icon',
    iconName: 'twitter',
    url: 'https://twitter.com/autonolas',
  },
];

const NAVIGATION_SOCIALS = [
  {
    id: 'ola-tribe-twitter',
    type: 'twitter',
    url: 'https://twitter.com/valoryag',
  },
  {
    id: 'ola-tribe-discord',
    type: 'discord',
    url: 'https://discord.com/invite/z2PT65jKqQ',
  },
  {
    id: 'ola-tribe-github',
    type: 'github',
    url: 'https://github.com/valory-xyz',
    iconSize: 'small',
  },
];

const getNavigationsMenu = (menuList, callback, suffix = '') => menuList.map(eachNav => {
  const mapKey = `navigation-id-${eachNav.id}-${suffix}`;
  const isIcon = eachNav.type === 'icon';
  const title = isIcon ? (
    <img src={`/images/common/${eachNav.iconName}.svg`} alt="" />
  ) : (
    eachNav.name
  );

  return (
    <li className="nav-item" key={mapKey}>
      <a
        href={isIcon ? eachNav.url : `#${eachNav.id}`}
        className="nav-link"
        target={isIcon ? '_blank' : '_self'}
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
      if (window.scrollY >= 80) {
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
  const logoImage = <img src="/images/header/logo.png" alt="autonolas-logo" />;

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
      style={{ backgroundColor: isTransparent ? 'transparent' : COLOR.WHITE }}
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
                <a href="#banner" className="nav-logo">
                  {logoImage}
                </a>
              </MobileNavigationContainer>
            )}

            <Hamburger
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
          <ul className="nav-menu">
            {getNavigationsMenu(NAV_1, setNavigationToggle)}
            <li className="nav-item  nav-item-logo">
              <a href="#banner" className="nav-link">
                {logoImage}
              </a>
            </li>
            <li />
            {getNavigationsMenu(NAV_2, setNavigationToggle)}
          </ul>
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
