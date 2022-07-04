import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import get from 'lodash/get';
import Button from 'common-util/Button';
import Tag from 'common-util/Tag';
import PATHS from 'util/paths';

const EachPress = ({ press }) => {
  const { id, attributes } = press || {};
  const {
    title, thumbnail, type, publisher,
  } = attributes || {};
  const imageUrl = get(thumbnail, 'data.attributes.url') || '';

  return (

    <div className="column">
      <div
        className="img-container"
        style={{
          // backgroundImage: 'url("/images/11Team/background.webp")',
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />
      <Tag>{type}</Tag>
      <div className="header-text">{title}</div>
      <div className="subtitle">{publisher}</div>

      <Link href={`/${PATHS.PRESS}/${id}`}>
        <a>
          <Button title="LEARN MORE" type="black" className="mini" />
        </a>
      </Link>
    </div>
  );
};

EachPress.propTypes = {
  press: PropTypes.instanceOf(Object).isRequired,
};

export default EachPress;
