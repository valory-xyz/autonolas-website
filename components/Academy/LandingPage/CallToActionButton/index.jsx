import React from 'react';
import Button from 'common-util/Button';
import Link from 'next/link';

const CallToActionButton = () => (
  <Link href="/academy/education-track" passHref>
    <a>
      <Button hasArrowSuffix type="purple" title="Start Learning" />
    </a>
  </Link>
);

export default CallToActionButton;
