import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT_SIZE, MEDIA_QUERY } from 'util/theme';

export const Btn = styled.button`
  outline: none;
  font-size: ${FONT_SIZE[18]};
  text-transform: uppercase;
  transition: all 0.3s;
  line-height: normal;
  padding: 0.75rem 2rem;
  clip-path: none;
  border-radius: 48px;
  text-decoration: none;
  &.mini {
    padding: 0.35rem 1rem;
    font-size: 12px;
  }
  &:hover {
    cursor: pointer;
  }

  ${MEDIA_QUERY.laptop} {
    width: auto;
    padding-left: 48px;
    padding-right: 48px;
  }

  ${MEDIA_QUERY.tablet} {
    font-size: ${FONT_SIZE[22]};
  }

  ${MEDIA_QUERY.mobileL} {
    width: 100%;
    font-size: 18px;
  }

  ${({ type }) => {
    switch (type) {
      case 'black':
        return `
          border: 1px solid ${COLOR.BLACK};
          background-color: ${COLOR.BLACK};
          color: ${COLOR.WHITE};
          font-size: 20px;
          &:hover, &:active {
            background-color: ${COLOR.GREEN_2};
            color: ${COLOR.BLACK};
            border : 1px solid ${COLOR.GREEN_2};
          }
        `;
      case 'link-arrow':
        return `
          display: flex;
          align-items: center;
          border: 1px solid transparent;
          background-color: transparent;
          color: ${COLOR.BLACK};
          text-transform: initial;
          font-size: 24px;
          img {
            margin-left: 1rem;
            width: 40px;
          }
          &:hover, &:active {
            background-color: transparent;
            color: ${COLOR.BLACK};
            border: 1px solid transparent;
          }
        `;
      case 'primary':
      case 'purple':
      default:
        return `
          border: 1px solid ${COLOR.PURPLE};
          background-color: ${COLOR.PURPLE};
          color: ${COLOR.WHITE};
          &:hover, &:active {
            background-color: ${COLOR.GREEN_1};
            color: ${COLOR.BLACK};
            border : 1px solid ${COLOR.GREEN_1};
          }
        `;
    }
  }}
`;

const CustomButton = ({
  title, type, className, hasArrowSuffix, ...rest
}) => {
  const clsName = `btn ${className || ''}`.trim();

  return (
    <Btn type={type} className={clsName} {...rest} hasArrowSuffix>
      {title}
      {type === 'link-arrow' && (
        <>
          <img src="images/common/arrow.png" alt=" " loading="lazy" />
        </>
      )}
      {hasArrowSuffix && " →"}
    </Btn>
  );
};

CustomButton.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.oneOf(['black', 'primary', 'purple', 'link-arrow']),
  className: PropTypes.string,
  hasArrowSuffix: PropTypes.bool,
};

CustomButton.defaultProps = {
  hasArrowSuffix: false,
  type: 'primary',
  className: '',
};

export default CustomButton;
