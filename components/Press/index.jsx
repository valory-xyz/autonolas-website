import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import Tag from 'common-util/Tag';
import { getFormattedDate } from 'common-util/functions';
import { TwoColumnContents } from 'components/GlobalStyles';
import { PressContainer } from './styles';

const Press = ({ press }) => (
  <>
    <PressContainer className="content-list-section">
      <Header className="header" title="Press" />
    </PressContainer>

    <TwoColumnContents className="section">
      {press.map(({ id, attributes }) => {
        const {
          title, thumbnail, publisher, datePublished, type, link,
        } = attributes || {};
        const imageUrl = get(thumbnail, 'data.attributes.url') || '';

        return (
          <div key={`press-${id}`} className="column">
            <div
              className="img-container"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
              }}
            />
            <Tag>{type}</Tag>
            <div className="header-text">{title}</div>
            <div className="subtitle">{publisher}</div>
            <div className="date-published">
              {getFormattedDate(datePublished)}
            </div>

            <Button
              title="LEARN MORE"
              type="black"
              className="mini"
              onClick={() => window.open(link)}
            />
          </div>
        );
      })}
    </TwoColumnContents>
  </>
);

Press.propTypes = {
  press: PropTypes.instanceOf(Array),
};

Press.defaultProps = {
  press: [],
};

export default Press;
