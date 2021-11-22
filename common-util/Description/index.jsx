import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT_SIZE, BREAK_POINT } from 'util/theme';

const Desc = styled.div`
  font-size: 24px;
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    font-size: 20px;
  }
`;

const Description = ({ title, type, ...rest }) => {
  const others = {
    className: 'description',
    ...rest,
  };

  const getStyle = () => {
    switch (type) {
      case 1:
        return { fontSize: FONT_SIZE[24] };
      default:
        return { fontSize: FONT_SIZE[24] };
    }
  };

  return (
    <Desc style={getStyle()} {...others}>
      {title}
    </Desc>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.number,
};

Description.defaultProps = {
  type: null,
};

export default Description;
