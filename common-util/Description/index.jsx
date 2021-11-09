import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT_SIZE } from 'util/theme';

const Desc = styled.div``;

const Description = ({ title, type, ...rest }) => {
  const others = {
    className: 'description',
    ...rest,
  };

  switch (type) {
    case 1:
      return <Desc style={{ fontSize: FONT_SIZE[24] }}>{title}</Desc>;

    default:
      return <Desc style={{ fontSize: FONT_SIZE[20] }} {...others}>{title}</Desc>;
  }
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.number,
};

Description.defaultProps = {
  type: null,
};

export default Description;
