import React from 'react';
import { Grid } from 'antd';
import Image from 'next/image';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { getFormattedDate } from 'common-util/functions';
import { TwoColumnContents } from 'components/GlobalStyles';
import { BlogContainer } from './styles';

const { useBreakpoint } = Grid;

const Blog = ({ blogs }) => {
  const screens = useBreakpoint();

  return (
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
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`}
                alt={`Blog | ${title}`}
                width={screens.xs ? 300 : 520}
                height={screens.xs ? 170 : 270}
              />

              <div className="header-text">{title}</div>
              <div className="subtitle">{subtitle}</div>
              <div className="date-published">
                {getFormattedDate(datePublished)}
              </div>

              <a href={`/${PATHS.BLOG}/${slug}`}>
                <Button title="LEARN MORE NOW" type="black" />
              </a>
            </div>
          );
        })}
      </TwoColumnContents>
    </>
  );
};

Blog.propTypes = {
  blogs: PropTypes.instanceOf(Array),
};

Blog.defaultProps = {
  blogs: [],
};

export default Blog;
