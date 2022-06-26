import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import { SeeAllBtnRow } from 'components/GlobalStyles';
import { Section12, Content } from './styles';

const PressAndBlogs = ({ blogs }) => (
  <Section12 className="section section-12" id="_______">
    <Header className="header" title="From the blogs" />

    <Content>
      {blogs.map(({ id, attributes }, index) => {
        const {
          title, image, subtitle,
        } = attributes || {};
        // TODO: remove once image is added
        const imageUrl = get(image, 'data.attributes.url') || '/images/8WhatCouldYouBuild/asset-management.png';

        return (
          <div
            key={`blog-${id}`}
            className={`column column-${index + 1}`}
            style={{ width: (index === 0 || index === 1) ? '40%' : '27.5%' }}
          >
            <div
              className="img-container"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />
            <div className="header-text">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <Button
              title="LEARN MORE"
              type="black"
              className="mini"
              onClick={() => {
                window.open(`${window.location.href}blog-post/${id}`);
              }}
            />
          </div>
        );
      })}
    </Content>

    <SeeAllBtnRow>
      <Button
        title="See all"
        type="link-arrow"
        onClick={() => window.open('https://docs.autonolas.network/')}
      />
    </SeeAllBtnRow>
  </Section12>
);

PressAndBlogs.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
};

export default PressAndBlogs;
