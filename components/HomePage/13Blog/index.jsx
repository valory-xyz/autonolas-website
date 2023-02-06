import React from 'react';
import { Col, Row, Typography } from 'antd';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import {
  HeaderAndAction,
} from 'components/GlobalStyles';
import { ROW_GUTTER } from 'util/theme';
import { SectionBlog } from './styles';

const { Title } = Typography;

const Blog = ({ blog }) => {
  const { id, attributes } = blog || {};
  const {
    title, headerImage, subtitle, slug,
  } = attributes || {};
  const imageUrl = get(headerImage, 'data[0].attributes.url') || '';

  return (
    <div key={`blog-${id}`} className="blog-item">
      <a href={`/${PATHS.BLOG}/${slug}`}>
        <img src={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`} alt={title} className="blog-item-image" />
      </a>
      <Title level={2}>{title}</Title>
      <p>{subtitle}</p>

      <a href={`/${PATHS.BLOG}/${slug}`}>
        <Button title="LEARN MORE" type="black" />
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.instanceOf(Object).isRequired,
};

/**
 * Blogs component
 */

const PressAndBlogs = ({ blogs }) => {
  const firstTwoBlogs = (blogs || []).slice(0, 2);
  const restOfTheBlogs = (blogs || []).slice(2, 5);

  return (
    <SectionBlog className="section section-blog" id="blog">
      <HeaderAndAction className="xs-wrap">
        <Header className="header" title="From the blog" />
        <a href={`/${PATHS.BLOG}`} className="no-underline">
          <Button title="See all" type="link-arrow" />
        </a>
      </HeaderAndAction>

      <Row gutter={ROW_GUTTER} className="blog-collection-row">
        {firstTwoBlogs.map(item => (
          <Col lg={12} sm={24} key={`blogs-${item.id}`}>
            <Blog blog={item} />
          </Col>
        ))}
      </Row>

      <Row gutter={ROW_GUTTER} className="blog-collection-row">
        {restOfTheBlogs.map(item => (
          <Col lg={8} sm={24} md={24} key={`blogs-${item.id}`}>
            <Blog blog={item} />
          </Col>
        ))}
      </Row>
    </SectionBlog>
  );
};

PressAndBlogs.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
};

export default PressAndBlogs;
