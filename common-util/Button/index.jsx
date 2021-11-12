import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT_SIZE } from 'util/theme';

export const Btn = styled.button`
  outline: none;
  height: 48px;
  width: 280px;
  font-size: ${FONT_SIZE[24]};
  text-transform: uppercase;
  font-family: triakis__fontbold, sans-serif;
  transition: all 0.3s;
  line-height: normal;

  &:hover {
    cursor: pointer;
  }
  ${({ type }) => {
    switch (type) {
      case 'invert':
        return `
          border : 1px solid transparent;
          background-color: ${COLOR.GREEN_2};
          color: ${COLOR.BLACK};
          &:hover {
            border : 1px solid ${COLOR.BLACK};
            background-color: ${COLOR.BLACK};
            color: ${COLOR.GREEN_2};
          }
        `;
      case 'outline':
        return `
          border : 1px solid ${COLOR.BLACK};
          background-color: transparent;
          color: ${COLOR.BLACK};
          &:hover {
            background-color: ${COLOR.BLACK};
            color: ${COLOR.GREEN_2};
          }
        `;
      case 'primary':
      default:
        return `
          border : 1px solid ${COLOR.BLACK};
          background-color: ${COLOR.BLACK};
          color: ${COLOR.GREEN_2};
          &:hover {
            border : 1px solid ${COLOR.GREEN_2};
            background-color: ${COLOR.GREEN_2};
            color: ${COLOR.BLACK};
          }
        `;
    }
  }}
`;

const CustomButton = ({
  title, type, className, ...rest
}) => {
  const clsName = `btn ${className || ''}`.trim();

  return (
    <Btn type={type} className={clsName} {...rest}>
      {title}
    </Btn>
  );
};

CustomButton.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.oneOf(['primary', 'outline']),
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  type: 'primary',
  className: '',
};

export default CustomButton;
