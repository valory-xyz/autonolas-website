import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import get from 'lodash/get';
import Link from 'next/link';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { getFormattedDate } from 'common-util/functions';
import { EachBlogContainer } from './styles';

const EachBlog = ({ blog }) => {
  const { attributes } = blog;
  const {
    title, subtitle, headerImage, datePublished, body,
  } = attributes || {};
  const imageUrl = get(headerImage, 'data[0].attributes.url') || '';

  return (
    <EachBlogContainer className="each-content">
      <div
        className="each-content-header-image"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />

      <div className="each-content-body">
        <Header className="header" title={title} />

        <div className="each-content-details">
          <div className="subtitle">{subtitle}</div>
          <div className="date-published">
            {getFormattedDate(datePublished)}
          </div>
          <div className="body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {body}
            </ReactMarkdown>
          </div>

          <Link href="/blog" passHref>
            <Button title="BACK TO BLOG" as="a" />
          </Link>
        </div>
      </div>
    </EachBlogContainer>
  );
};

EachBlog.propTypes = {
  blog: PropTypes.instanceOf(Object),
};

EachBlog.defaultProps = {
  blog: null,
};

export default EachBlog;
