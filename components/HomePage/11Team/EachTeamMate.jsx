import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { getSocials } from 'common-util/functions';

const TeamMate = ({ member }) => {
  const {
    name, description, title, image, twitterUrl, linkedinUrl,
  } = member || {};
  const imageUrl = get(image, 'data.attributes.url');
  const socials = [];
  if (twitterUrl) socials.push({ type: 'twitter', url: twitterUrl });
  if (linkedinUrl) socials.push({ type: 'linkedin', url: linkedinUrl });

  return (
    <div className="column">
      <div
        className="img-container"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />
      <div className="header-text">{name}</div>
      <div className="sub-text">{title}</div>
      <div className="desc">{description}</div>
      {getSocials(socials, 'svg')}
    </div>
  );
};

TeamMate.propTypes = {
  member: PropTypes.instanceOf(Object).isRequired,
};

export default TeamMate;
