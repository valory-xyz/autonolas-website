import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT_SIZE, BREAK_POINT, COLOR } from 'util/theme';

const Container = styled.div`
  font-family: neuemachina__light;
  display: inline-block;
  font-size: ${FONT_SIZE[14]};
  border-radius: 1rem;
  border: 1px solid ${COLOR.PURPLE};
  padding: 0.35rem 1rem 0.25rem 1rem;
  line-height: normal;
  color: ${COLOR.PURPLE};
  text-transform: capitalize;
  @media only screen and (max-width: ${BREAK_POINT.xl}) {
  }
`;

const Tag = ({ children, className, ...rest }) => {
  const others = {
    className: `tag ${className}`,
    ...rest,
  };

  return <Container {...others}>{children}</Container>;
};

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
};

Tag.defaultProps = {
  children: null,
  className: '',
};

export default Tag;
