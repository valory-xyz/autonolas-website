import styled from 'styled-components';
import { useState } from 'react';
import { COLOR, BREAK_POINT } from 'util/theme';

// import { Anchor } from 'antd';
// const { Link } = Anchor;

const Container = styled.header`
  /* position: sticky; */
  /* top: 0; */
  /* width: calc(100% + 60px); */

  &.navigation-header {
    position: absolute;
    top: 64px;
    width: calc(100% - 32px);
    max-width: 1500px;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    /* position: fixed; */
    /* width: 100%; */
  }
  .nav-menu {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-item {
      .nav-link {
        font-size: 14px;
        color: ${COLOR.BLACK};
        text-transform: uppercase;
        &:hover {
          color: ${COLOR.BLACK};
          text-decoration: underline;
        }
      }
      &.nav-item-logo {
        min-width: 140px;
        display: flex;
        justify-content: center;
        img {
          width: 48px;
        }
      }
    }
  }

  /* --- */
  .hamburger {
    display: none;
  }
  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: ${COLOR.BLACK};
  }

  @media only screen and (max-width: ${BREAK_POINT}) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 5rem;
      flex-direction: column;
      background-color: ${COLOR.WHITE};
      width: 100%;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      /* box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05); */
      &.active {
        left: 0;
      }
      .nav-item {
        margin: 2.5rem 0;
        line-height: normal;
        margin: 24px;
      }
    }
    .hamburger {
      display: block;
      cursor: pointer;
      &.active {
        .bar {
          &:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
        }
      }
    }
    .hamburger.active .bar:nth-child(2) {
    }
    .hamburger.active .bar:nth-child(1) {
    }
    .hamburger.active .bar:nth-child(3) {
    }
  }

  /* common */
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

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

const Navigation = () => {
  const [isMobile, setMobile] = useState(false);

  return (
    <Container className="navigation-header">
      <nav className="navbar">
        <div className={`nav-menu ${isMobile ? 'active' : 'desktop'}`}>
          {isMobile ? (
            <>{getNavigationsMenu([...NAV_1, ...NAV_2], 'mobile')}</>
          ) : (
            <>
              {getNavigationsMenu(NAV_1)}
              <li className="nav-item  nav-item-logo">
                <a href="#birth-place" className="nav-link">
                  <img
                    src="/images/footer/autonolas-logo.png"
                    alt="autonolas-logo"
                  />
                </a>
              </li>
              <li />
              {getNavigationsMenu(NAV_2)}
            </>
          )}
        </div>

        <div
          className={`hamburger ${isMobile ? 'active' : ''}`}
          role="button"
          tabIndex={0}
          onClick={() => setMobile(!isMobile)}
          onKeyDown={() => setMobile(!isMobile)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </nav>
    </Container>
  );
};
export default Navigation;

// role="button" onClick={ck} onKeyPress={ck} tabIndex={0}
/*
import React from 'react';
// import PropTypes from 'prop-types';

const Cont = styled.div`
  `;

  const Navigation = () => (
    <Cont>
      <ul>
        <li>WHY?</li>
        <li>WHAT?</li>
        <li>DEVELOPERS</li>
        <li>COMMUNITY</li>
        <li>PRODUCT</li>
        <li>LORE</li>
        <li>ABOUT</li>
      </ul>
    </Cont>
  );

  // Navigation.propTypes = {
  //   title: PropTypes.string.isRequired,
  // };

  export default Navigation;

*/
