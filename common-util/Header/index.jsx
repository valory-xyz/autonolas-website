import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 70px;
`;

const Header = ({ title, ...rest }) => <H2 {...rest}>{title}</H2>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
