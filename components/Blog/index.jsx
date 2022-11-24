import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { getFormattedDate } from 'common-util/functions';
import { TwoColumnContents } from 'components/GlobalStyles';
import { BlogContainer } from './styles';

const Blog = ({ blogs }) => (
  <>
    <BlogContainer className="content-list-section">
      <Header className="header" title="Blog" />
    </BlogContainer>

    <TwoColumnContents className="section">
      {blogs.map(({ id, attributes }, index) => {
        const {
          title, headerImage, subtitle, datePublished, slug,
        } = attributes || {};
        const imageUrl = get(headerImage, 'data[0].attributes.url') || '';

        return (
          <div key={`blog-${id}`} className={`column column-${index + 1}`}>
            <div
              className="img-container"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
              }}
            />
            <div className="header-text">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <div className="date-published">
              {getFormattedDate(datePublished)}
            </div>

            <a href={`/${PATHS.BLOG}/${slug}`}>
              <Button title="LEARN MORE" type="black" className="mini" />
            </a>
          </div>
        );
      })}
    </TwoColumnContents>
  </>
);

Blog.propTypes = {
  blogs: PropTypes.instanceOf(Array),
};

Blog.defaultProps = {
  blogs: [],
};

export default Blog;
