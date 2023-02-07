import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Button from 'common-util/Button';
import Tag from 'common-util/Tag';
import { Col } from 'antd';
import Title from 'antd/lib/typography/Title';

const EachPress = ({ press }) => {
  const { attributes } = press || {};
  const {
    title, thumbnail, type, publisher, link,
  } = attributes || {};
  const imageUrl = get(thumbnail, 'data.attributes.url') || '';

  return (
    <Col lg={8} className="press-item">
      <a href={link}>
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`}
          alt={title}
          className="press-item-image"
        />
      </a>

      <Tag>{type}</Tag>
      <br />

      <Title level={3} className="press-item-title">
        {title}
      </Title>

      <p>{publisher}</p>

      <Button
        title="LEARN MORE"
        type="black"
        onClick={() => window.open(link)}
      />
    </Col>
  );
};

EachPress.propTypes = {
  press: PropTypes.instanceOf(Object).isRequired,
};

export default EachPress;
