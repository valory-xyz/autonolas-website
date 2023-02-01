import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Typography } from 'antd';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { getFormattedDate } from 'common-util/functions';
import { ROW_GUTTER } from 'util/theme';
import { BlogHero, BlogIndexContainer } from './styles';

const { Title } = Typography;

const Blog = ({ blogs }) => (
  <>
    <BlogHero className="content-list-section">
      <Header className="header" title="Blog" />
    </BlogHero>

    <BlogIndexContainer>
      <Row gutter={ROW_GUTTER}>
        {blogs.map(({ id, attributes }) => {
          const {
            title, headerImage, subtitle, datePublished, slug,
          } = attributes || {};
          const imageUrl = get(headerImage, 'data[0].attributes.url') || '';

          return (
            <Col lg={12} key={`blog-${id}`} className="blog-item">
              <img src={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`} alt={title} className="blog-item-image" />
              <Title>{title}</Title>
              <p>{subtitle}</p>
              <p>
                {getFormattedDate(datePublished)}
              </p>

              <a href={`/${PATHS.BLOG}/${slug}`}>
                <Button title="LEARN MORE" type="black" />
              </a>
            </Col>
          );
        })}
      </Row>
    </BlogIndexContainer>
  </>
);

Blog.propTypes = {
  blogs: PropTypes.instanceOf(Array),
};

Blog.defaultProps = {
  blogs: [],
};

export default Blog;
