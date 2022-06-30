import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import {
  HeaderAndAction,
  TwoColumnContents,
  ThreeColumnContents,
} from 'components/GlobalStyles';
import { SectionBlog } from './styles';

const Blog = ({ blog }) => {
  const { id, attributes } = blog || {};
  const { title, headerImage, subtitle } = attributes || {};
  const imageUrl = get(headerImage, 'data[0].attributes.url') || '';

  return (
    <div key={`blog-${id}`} className="column">
      <div
        className="img-container"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />
      <div className="header-text">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <Button
        title="LEARN MORE"
        type="black"
        className="mini"
        onClick={() => {
          window.open(`${window.location.origin}/blog/${id}`);
        }}
      />
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
      <HeaderAndAction>
        <Header className="header" title="From the blog" />
        <Button
          title="See all"
          type="link-arrow"
          onClick={() => window.open(`${window.location.origin}/blog`)}
        />
      </HeaderAndAction>

      <TwoColumnContents className="section">
        {firstTwoBlogs.map(item => (
          <Blog blog={item} />
        ))}
      </TwoColumnContents>

      <ThreeColumnContents>
        {restOfTheBlogs.map(item => (
          <div className="details" key={`blogs-${item.id}`}>
            <Blog blog={item} />
          </div>
        ))}
      </ThreeColumnContents>
    </SectionBlog>
  );
};

PressAndBlogs.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
};

export default PressAndBlogs;
