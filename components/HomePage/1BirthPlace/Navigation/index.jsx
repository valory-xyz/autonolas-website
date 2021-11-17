import PropTypes from 'prop-types';
import { useCheckMobileScreen } from 'common-util/hooks';
import { getSocials } from '../../10About';
import { Container } from './styles';

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

const getNavigationsMenu = (menuList, suffix = '') => menuList.map(eachNav => {
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
      >
        {title}
      </a>
    </li>
  );
});

const Navigation = ({ isNavigationOpen, setNavigationToggle }) => {
  const isMobile = useCheckMobileScreen();

  const isShow = () => {
    if (isMobile) {
      return isNavigationOpen ? 'show-navbar' : 'hide-navbar';
    }
    return 'show-navbar';
  };

  const logoImage = (
    <img
      src="/images/footer/autonolas-logo.png"
      alt="autonolas-logo"
    />
  );

  return (
    <Container className={`navigation-header ${isShow()}`}>
      <nav className={`navbar ${isMobile ? 'mobile' : 'desktop'}`}>
        {isMobile ? (
          <>
            <ul className="nav-menu">
              <>
                {isNavigationOpen
                  ? getNavigationsMenu(
                    [
                      ...NAV_1,
                      ...[...NAV_2].filter(({ type }) => type !== 'icon'),
                    ],
                    'mobile',
                  )
                  : null}
              </>
            </ul>
            {getSocials(NAVIGATION_SOCIALS)}
            <div className="mobile-nav-item-logo">
              {logoImage}
            </div>
          </>
        ) : (
          <ul className="nav-menu">
            <>
              {getNavigationsMenu(NAV_1)}
              <li className="nav-item  nav-item-logo">
                <a
                  href="#birth-place"
                  className="nav-link"
                  onClick={() => {
                    setNavigationToggle(false);
                    return true;
                  }}
                >
                  {logoImage}
                </a>
              </li>
              <li />
              {getNavigationsMenu(NAV_2)}
            </>
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
