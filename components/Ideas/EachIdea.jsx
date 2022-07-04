import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import Tag from 'common-util/Tag';
import { EachIdeaContainer } from './styles';

const EachIdea = ({ idea }) => {
  const { attributes } = idea;
  const {
    category, description, image, type, body,
  } = attributes || {};
  const imageUrl = get(image, 'data[0].attributes.url') || '';

  return (
    <EachIdeaContainer className="each-content">
      <div
        className="each-content-header-image"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />

      <div className="each-content-body">
        <Header className="header" title={category} />

        <div className="each-content-details">
          <Tag>{type}</Tag>
          <div className="subtitle">{description}</div>
          <div className="body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
          </div>

          <a href={`/${PATHS.IDEAS}`}>
            <Button title="BACK TO IDEAS" />
          </a>
        </div>
      </div>
    </EachIdeaContainer>
  );
};

EachIdea.propTypes = {
  idea: PropTypes.instanceOf(Object),
};

EachIdea.defaultProps = {
  idea: null,
};

export default EachIdea;
