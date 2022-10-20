import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT_SIZE, BREAK_POINT } from 'util/theme';

const Desc = styled.div`
  font-family: manrope__medium;
  &.center {
    text-align: center;
  }
  ${({ type }) => {
    switch (type) {
      case 1:
        return `
          font-size : ${FONT_SIZE[30]};
        `;
      case 2:
        return `
          font-size : ${FONT_SIZE[28]};
        `;
      case 3:
        return `
          font-size : ${FONT_SIZE[26]};
        `;
      case 4:
        return `
          font-size : ${FONT_SIZE[24]};
        `;
      case 10:
      default:
        return `
          font-size : ${FONT_SIZE[28]};
        `;
    }
  }}

  @media only screen and (max-width: ${BREAK_POINT.xl}) {
    ${({ type }) => {
    switch (type) {
      case 1:
        return `
          font-size : ${FONT_SIZE[30]};
        `;
      case 2:
        return `
          font-size : ${FONT_SIZE[20]};
        `;
      case 3:
        return `
          font-size : ${FONT_SIZE[22]};
        `;
      case 4:
        return `
          font-size : ${FONT_SIZE[16]};
        `;
      case 10:
      default:
        return `
          font-size : ${FONT_SIZE[20]};
        `;
    }
  }}
  }
`;

const Description = ({
  title, type, className, ...rest
}) => {
  const others = {
    className: `description ${className}`,
    ...rest,
  };

  return (
    <Desc type={type} {...others}>
      {title}
    </Desc>
  );
};

Description.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
  type: PropTypes.number,
};

Description.defaultProps = {
  type: null,
  className: '',
};

export default Description;
