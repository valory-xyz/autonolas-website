import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { getFormattedDate } from 'common-util/functions';
import { TwoColumnContents } from 'components/GlobalStyles';
import { EducationArticlesContainer } from './styles';

const EducationArticle = ({ educationArticles }) => (
  <>
    <EducationArticlesContainer className="content-list-section">
      <Header className="header" title="Education" />
    </EducationArticlesContainer>

    <TwoColumnContents className="section background-gradient">
      {educationArticles.map(({ id, attributes }) => {
        const {
          title, headerImage, subtitle, datePublished,
        } = attributes || {};
        const imageUrl = get(headerImage, 'data.attributes.url') || '';

        return (
          <div className="column" key={`education-article-${id}`}>
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

            <a href={`/${PATHS.EDUCATION_ARTICLES}/${id}`}>
              <Button title="LEARN MORE NOW" type="black" className="mini" />
            </a>
          </div>
        );
      })}
    </TwoColumnContents>
  </>
);

EducationArticle.propTypes = {
  educationArticles: PropTypes.instanceOf(Array),
};

EducationArticle.defaultProps = {
  educationArticles: [],
};

export default EducationArticle;
