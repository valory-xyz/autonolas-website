/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Button from 'common-util/Button';
import Tag from 'common-util/Tag';
import PATHS from 'util/paths';

const EachIdea = ({ idea }) => {
  const { id, attributes } = idea || {};
  const {
    image,
    type,
    blueprints: blueprintsData,
    description,
    category,
    benefit_to_dao,
  } = attributes || {};
  const imageUrl = get(image, 'data[0].attributes.url') || '';
  const blueprints = get(blueprintsData, 'data') || [];

  return (
    <div className="column">
      <div
        className="img-container"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />
      <Tag>{type}</Tag>

      <div className="header-text">{category}</div>
      <div className="desc">{description}</div>
      <div className="sub-text">
        {`${blueprints.length} IMPLEMENTATION BLUEPRINT${
          blueprints.length === 1 ? '' : 'S'
        }`}
      </div>

      {benefit_to_dao ? (
        <a href={`/${PATHS.IDEAS}/${id}`}>
          <Button title="LEARN MORE" type="black" className="mini" />
        </a>
      ) : (
        <a
          href="mailto:bd@valory.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button title="REQUEST DETAILS" type="black" className="mini" />
        </a>
      )}
    </div>
  );
};

EachIdea.propTypes = {
  idea: PropTypes.instanceOf(Object).isRequired,
};

export default EachIdea;
