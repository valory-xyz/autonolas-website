import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAK_POINT } from 'util/theme';

const H2 = styled.h2`
  margin: 0;
  font-size: 108px;
  line-height: normal;
  font-family: triakis__fontheavy, sans-serif;
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    font-size: 54px;
  }
`;

const Header = ({ title, ...rest }) => <H2 {...rest}>{title}</H2>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
