import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import { HeaderAndAction } from 'components/GlobalStyles';
import { SectionBlog, Content } from './styles';

const PressAndBlogs = ({ blogs }) => (
  <SectionBlog className="section section-blog" id="blog">
    <HeaderAndAction>
      <Header className="header" title="From the blogs" />
      <Button
        title="See all"
        type="link-arrow"
        onClick={() => window.open(`${window.location.origin}/blog`)}
      />
    </HeaderAndAction>

    <Content>
      {blogs.map(({ id, attributes }, index) => {
        const { title, headerImage, subtitle } = attributes || {};
        const imageUrl = get(headerImage, 'data[0].attributes.url') || '';

        return (
          <div
            key={`blog-${id}`}
            className={`column column-${index + 1}`}
            style={{ width: index === 0 || index === 1 ? '40%' : '27.5%' }}
          >
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
      })}
    </Content>
  </SectionBlog>
);

PressAndBlogs.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
};

export default PressAndBlogs;
