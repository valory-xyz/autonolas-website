import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

const H2 = styled.h2`
  margin: 0;
  font-size: 120px;
  line-height: 1;
  word-wrap: break-word;
  &.center {
    text-align: center;
  }
  .sub-text {
    display: inline-block;
    font-family: "manrope__light", sans-serif;
    font-weight: 500;
  }
  .ib {
    display: inline-block;
  }

  ${MEDIA_QUERY.laptop} {
    font-size: 94px;
  }

  ${MEDIA_QUERY.tablet} {
    font-size: 54px;
  }
`;

const Header = ({ title, ...rest }) => <H2 {...rest}>{title}</H2>;

Header.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default Header;
