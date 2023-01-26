import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common-util/Button';
import Link from 'next/link';

const CallToActionButton = ({
  href, btnText, type, external,
}) => {
  const externalAttr = external && { target: '_blank', rel: 'noopener' };

  return (
    <Link href={href} passHref>
      <a {...externalAttr}>
        <Button hasArrowSuffix type={type} title={btnText} disabled={!href} />
      </a>
    </Link>
  );
};

CallToActionButton.propTypes = {
  href: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  type: PropTypes.string,
  external: PropTypes.bool,
};


CallToActionButton.defaultProps = {
  href: '',
  type: 'purple',
  external: false,
};

export default CallToActionButton;
