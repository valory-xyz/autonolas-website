import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Link from 'next/link';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { getFormattedDate } from 'common-util/functions';
import { TwoColumnContents } from 'components/GlobalStyles';
import { IdeaContainer } from './styles';

const Ideas = ({ ideas }) => (
  <>
    <IdeaContainer className="content-list-section">
      <Header className="header" title="Ideas" />
    </IdeaContainer>

    <TwoColumnContents className="section">
      {ideas.map(({ id, attributes }, index) => {
        const {
          title, headerImage, subtitle, datePublished,
        } = attributes || {};
        const imageUrl = get(headerImage, 'data[0].attributes.url') || '';

        return (
          <div key={`idea-${id}`} className={`column column-${index + 1}`}>
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

            <Link href={`/ideas/${id}`} passHref>
              <a>
                <Button title="LEARN MORE" type="black" className="mini" />
              </a>
            </Link>
          </div>
        );
      })}
    </TwoColumnContents>
  </>
);

Ideas.propTypes = {
  ideas: PropTypes.instanceOf(Array),
};

Ideas.defaultProps = {
  ideas: [],
};

export default Ideas;
