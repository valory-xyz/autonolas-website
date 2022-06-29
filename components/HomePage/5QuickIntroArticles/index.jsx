import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { SectionFive, Content, SeeAll } from './styles';

const LIST = [
  {
    headerImage: 'open-source',
    readTime: 1,
    title: 'What is Autonolas?',
  },
  {
    headerImage: 'on-chain-protocol',
    readTime: 5,
    title: 'The concept of autonomy',
  },
  {
    headerImage: 'ecosystem',
    readTime: 5,
    title: 'Intro to technical architecture',
  },
];

const QuickIntroArticles = ({ educationArticles }) => {
  const list = educationArticles.length === 0 ? LIST : educationArticles.slice(0, 3);

  return (
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
        {list.map(({ headerImage, title, readTime }, index) => (
          <div key={headerImage} className={`column column-${index + 1}`}>
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
        ))}
      </Content>
    </SectionFive>
  );
};

QuickIntroArticles.propTypes = {
  educationArticles: PropTypes.instanceOf(Array).isRequired,
};

export default QuickIntroArticles;
