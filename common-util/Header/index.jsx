import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';

const H2 = styled.h2`
  margin: 0;
  font-size: 120px;
  line-height: normal;
  .sub-text {
    font-size: 24px;
  }

  ${MEDIA_QUERY.laptop} {
    font-size: 104px;
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
