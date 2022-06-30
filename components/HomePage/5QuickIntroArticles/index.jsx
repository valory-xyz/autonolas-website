import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { SectionFive, Content, SeeAll } from './styles';

const QuickIntroArticles = ({ educationArticles }) => (
  <SectionFive className="section section-education-articles">
    <Header className="header" title="Quick intro articles" />

    <SeeAll>
      <Button
        title="See all education articles"
        type="link-arrow"
        onClick={() => window.open(`${window.location.origin}/education`)}
      />
    </SeeAll>

    <Content>
      {educationArticles.map(({ id, attributes }) => {
        const { headerImage, title, readTime } = attributes || {};

        return (
          <Link key={headerImage} href={`/education-articles/${id}`}>
            <a className="details">
              <div className="column">
                <div
                  className="img-container"
                  style={{
                    backgroundImage:
                    "url('/images/5QuickIntroArticles/what-is-autonolas.png')",
                  }}
                />
                <div className="header-text">{title}</div>
                <div className="sub-text">
                  {readTime}
                &nbsp;
                  {readTime === 1 ? 'MIN' : 'MINS'}
                &nbsp; READ
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </Content>
  </SectionFive>
);

QuickIntroArticles.propTypes = {
  educationArticles: PropTypes.instanceOf(Array).isRequired,
};

export default QuickIntroArticles;
