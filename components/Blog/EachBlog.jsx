import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Markdown from 'common-util/Markdown';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { getFormattedDate } from 'common-util/functions';
import Sider from './Sider';
import { EachBlogContainer } from './styles';

const EachBlog = ({ blog }) => {
  const { attributes } = blog;
  const {
    title, subtitle, headerImage, datePublished, body, funnel,
  } = attributes || {};
  const imageUrl = get(headerImage, 'data[0].attributes.url') || '';
  const funnelName = get(funnel, 'data.attributes.name');

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
          <div className="each-content-details-1">
            <div className="subtitle">{subtitle}</div>
            <div className="date-published">
              {getFormattedDate(datePublished)}
              {funnelName && (
                <>
                  &nbsp;&bull;&nbsp;
                  {funnelName}
                </>
              )}
            </div>
            <div className="body">
              <Markdown>{body}</Markdown>
            </div>

            <a href={`/${PATHS.BLOG}`}>
              <Button title="BACK TO BLOG" />
            </a>
          </div>
          <div className="each-content-details-2">
            <Sider funnel={get(funnel, 'data.attributes')} />
          </div>
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
