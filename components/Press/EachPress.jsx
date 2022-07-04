import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import get from 'lodash/get';
import Link from 'next/link';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { getFormattedDate } from 'common-util/functions';
import { EachPressContainer } from './styles';

const EachPress = ({ press }) => {
  const { attributes } = press;
  const {
    title, thumbnail, publisher, datePublished, type,
  } = attributes || {};
  const imageUrl = get(thumbnail, 'data[0].attributes.url') || '';

  return (
    <EachPressContainer className="each-content">
      <div
        className="each-content-header-image"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />

      <div className="each-content-body">
        <Header className="header" title={title} />

        <div className="each-content-details">
          <div className="subtitle">{publisher}</div>
          <div className="date-published">
            {getFormattedDate(datePublished)}
          </div>

          {/* TODO: remove? */}
          <div className="body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{type}</ReactMarkdown>
          </div>

          <Link href="/press" passHref>
            <a>
              <Button title="BACK TO PRESS" />
            </a>
          </Link>
        </div>
      </div>
    </EachPressContainer>
  );
};

EachPress.propTypes = {
  press: PropTypes.instanceOf(Object),
};

EachPress.defaultProps = {
  press: null,
};

export default EachPress;
