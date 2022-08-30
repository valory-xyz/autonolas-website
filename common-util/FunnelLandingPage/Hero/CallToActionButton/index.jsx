import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common-util/Button';
import Link from 'next/link';

const CallToActionButton = ({ href, btnText }) => (
  <Link href={href} passHref>
    <a>
      <Button hasArrowSuffix type="purple" title={btnText} />
    </a>
  </Link>
);

CallToActionButton.propTypes = {
  href: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default CallToActionButton;
