import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const CustomButton = ({ title, ...rest }) => (
  <Button {...rest}>
    {title}
  </Button>
);

CustomButton.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

export default CustomButton;
