import React from 'react';
import PropTypes from 'prop-types';
import { META_TAGS_INFO } from 'util/constants';

// TODO
const PAGES = {
  // '/academy': {
  //   siteUrl: '',
  //   title: '',
  //   description: '',
  //   image: '',
  // },
};

const Meta = ({ pathname }) => {
  const metaInfo = PAGES[pathname] || META_TAGS_INFO;

  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaInfo.siteUrl} />
      <meta property="og:title" content={metaInfo.title} />
      <meta property="og:description" content={metaInfo.description} />
      <meta property="og:image" content={metaInfo.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaInfo.siteUrl} />
      <meta property="twitter:title" content={metaInfo.description} />
      <meta property="twitter:description" content={metaInfo.description} />
      <meta property="twitter:image" content={metaInfo.image} />
    </>
  );
};

Meta.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Meta;