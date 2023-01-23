import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common-util/Button';
import Link from 'next/link';

const CallToActionButton = ({ href, btnText, type }) => (
  <Link href={href} passHref>
    <a>
      <Button hasArrowSuffix type={type} title={btnText} disabled={!href} />
    </a>
  </Link>
);

CallToActionButton.propTypes = {
  href: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  type: PropTypes.string,
};


CallToActionButton.defaultProps = {
  href: '',
  type: 'purple',
};

export default CallToActionButton;
