import React from 'react';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import { SectionSeven, Content, CommissionUs } from './styles';

const LIST = [
  {
    imageUrl: 'docs',
    heading: 'DOCS',
    subHeading:
      'Work your way through our written documentation at your own pace.',
  },
  {
    imageUrl: 'dev-academy',
    heading: 'ACADEMY',
    subHeading:
      'Follow videos in our Education Track. Then apply to the Builder Track for expert guidance in developing high-impact services.',
  },
];

const WhyBuildOnAutonolas = () => (
  <SectionSeven className="section section-6" id="developers">
    <Header className="header center" title="Start Building" />

    <Content>
      {LIST.map((item, index) => (
        <div className={`column column-${index + 1}`}>
          <div className="img-container">
            <img
              src={`/images/7StartBuilding/${item.imageUrl}.png`}
              alt={`${item.heading} Icon`}
            />
          </div>
          <div className="header-text">{item.heading}</div>
          <div className="sub-text">{item.subHeading}</div>
          <div className="action-btn">
            <Button
              title="GET STARTED"
              type="black"
              onClick={() => window.open('https://docs.autonolas.network/')}
            />
          </div>
        </div>
      ))}
    </Content>

    <CommissionUs>
      <p>Don’t have time to build right now?</p>
      <a href="#banner">
        Commission us to build your service
      </a>
    </CommissionUs>
  </SectionSeven>
);

export default WhyBuildOnAutonolas;
