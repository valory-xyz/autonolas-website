import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import get from 'lodash/get';
import Link from 'next/link';
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
            {readTime === 1 ? 'MIN' : 'MINS'}
          </div>
          <div className="body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
          </div>

          <Link href="/education-articles" passHref>
            <a>
              <Button title="BACK TO ARTICLES" />
            </a>
          </Link>
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