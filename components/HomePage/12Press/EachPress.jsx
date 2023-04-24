import React from 'react';
import Image from 'next/image';
import { Col, Typography } from 'antd/lib';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Button from 'common-util/Button';
import Tag from 'common-util/Tag';

const { Title } = Typography;

const EachPress = ({ press }) => {
  const { attributes } = press || {};
  const {
    title, thumbnail, type, publisher, link,
  } = attributes || {};
  const imageUrl = get(thumbnail, 'data.attributes.url') || '';

  return (
    <Col lg={8} className="press-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`}
          alt={`${title} background image`}
          className="press-item-image"
          layout="fill"
          objectFit="contain"
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
