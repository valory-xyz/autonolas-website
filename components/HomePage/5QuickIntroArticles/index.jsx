import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { SectionFive, Content, GoDeep } from './styles';

const LIST = [
  {
    imageUrl: 'open-source',
    heading: 'What is Autonolas?',
  },
  {
    imageUrl: 'on-chain-protocol',
    heading: 'The concept of autonomy',
  },
  {
    imageUrl: 'ecosystem',
    heading: 'Intro to technical architecture',
  },
];

const QuickIntroArticles = () => (
  <SectionFive className="section section-5">
    <Header className="header" title="Quick intro articles" />

    <Content>
      {LIST.map((item, index) => (
        <div className={`column column-${index + 1}`}>
          <div
            className="img-container"
            style={{
              backgroundImage:
                "url('/images/5QuickIntroArticles/what-is-autonolas.png')",
            }}
          />
          <div className="header-text">{item.heading}</div>
          <div className="sub-text">4 MIN READ</div>
        </div>
      ))}
    </Content>

    <div className="see-all">
      <Button
        title="See all education articles"
        type="link-arrow"
        onClick={() => window.open('https://docs.autonolas.network/')}
      />
    </div>

    <GoDeep className="divider" />
  </SectionFive>
);

export default QuickIntroArticles;
