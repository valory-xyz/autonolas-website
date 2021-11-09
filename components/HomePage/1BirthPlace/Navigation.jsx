import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Cont = styled.div`
  /* font-size: 70px; */
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
