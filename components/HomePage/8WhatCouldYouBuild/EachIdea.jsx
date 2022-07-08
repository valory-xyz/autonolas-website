import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Button from 'common-util/Button';
import Tag from 'common-util/Tag';
import PATHS from 'util/paths';

const EachIdea = ({ idea }) => {
  const { id, attributes } = idea || {};
  const {
    image, type, blueprint, description, category,
  } = attributes || {};
  const imageUrl = get(image, 'data[0].attributes.url') || '';

  return (
    <div className="column">
      <div
        className="img-container"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />
      <Tag>{type}</Tag>

      {/* TODO: ask Oak */}
      <div className="header-text">{category}</div>
      <div className="desc">{description}</div>
      <div className="sub-text">
        {`${(blueprint || []).length} IMPLEMENTATION BLUEPRINTS`}
      </div>

      <a href={`/${PATHS.IDEAS}/${id}`}>
        <Button title="LEARN MORE" type="black" className="mini" />
      </a>
    </div>
  );
};

EachIdea.propTypes = {
  idea: PropTypes.instanceOf(Object).isRequired,
};

export default EachIdea;
