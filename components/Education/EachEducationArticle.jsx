import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Markdown from 'common-util/Markdown';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { EachEducationArticleContainer } from './styles';

const EachEducationArticle = ({ educationArticle }) => {
  const { attributes } = educationArticle;
  const {
    title, headerImage, readTime, body,
  } = attributes || {};
  const imageUrl = get(headerImage, 'data.attributes.url') || '';

  return (
    <EachEducationArticleContainer className="each-content">
      <div
        className="each-content-header-image"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />

      <div className="each-content-body">
        <Header className="header" title={title} />

        <div className="each-content-details">
          <div className="date-published">
            Read time:&nbsp;
            {readTime}
            &nbsp;
            {readTime === 1 ? 'min' : 'mins'}
          </div>
          <div className="body">
            <Markdown>{body}</Markdown>
          </div>

          <a href={`/${PATHS.EDUCATION_ARTICLES}`}>
            <Button title="BACK TO ARTICLES" />
          </a>
        </div>
      </div>
    </EachEducationArticleContainer>
  );
};

EachEducationArticle.propTypes = {
  educationArticle: PropTypes.instanceOf(Object),
};

EachEducationArticle.defaultProps = {
  educationArticle: null,
};

export default EachEducationArticle;
