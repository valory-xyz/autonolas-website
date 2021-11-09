import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT_SIZE } from 'util/theme';

export const Btn = styled.button`
  outline: none;
  /* padding: 12px 16px; */
  height: 48px;

  width: 280px;
  font-size: ${FONT_SIZE[18]};
  text-transform: uppercase;
  font-family: triakis__fontbold, sans-serif;
  ${({ type }) => {
    switch (type) {
      case 'invert':
        return `
          border : 1px solid transparent;
          background-color: ${COLOR.GREEN_2};
          color: ${COLOR.BLACK};
        `;
      case 'outline':
        return `
          border : 1px solid ${COLOR.BLACK};
          background-color: transparent;
          color: ${COLOR.BLACK};
        `;
      case 'primary':
      default:
        return `
          border : 1px solid ${COLOR.BLACK};
          background-color: ${COLOR.BLACK};
          color: ${COLOR.GREEN_2};
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
