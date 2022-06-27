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
    redirectTo: ' https://docs.autonolas.network/',
  },
  {
    imageUrl: 'dev-academy',
    heading: 'ACADEMY',
    subHeading:
      'Follow videos and complete projects in our Education Track. Then, apply to the Builder Track for expert guidance in developing high-impact services.',
    redirectTo: 'https://autonolas.network/academy',
  },
];

const WhyBuildOnAutonolas = () => (
  <SectionSeven className="section" id="build">
    <Header className="header center" title="Start Building" />

    <Content>
      {LIST.map(({
        heading, subHeading, imageUrl, redirectTo,
      }, index) => (
        <div key={imageUrl} className={`column column-${index + 1}`}>
          <div className="img-container">
            <img
              src={`/images/7StartBuilding/${imageUrl}.png`}
              alt={`${heading} Icon`}
            />
          </div>
          <div className="header-text">{heading}</div>
          <div className="sub-text">{subHeading}</div>
          <div className="action-btn">
            <Button
              title="GET STARTED"
              type="black"
              onClick={() => window.open(redirectTo)}
            />
          </div>
        </div>
      ))}
    </Content>

    <CommissionUs>
      <p>Don’t have time to build right now?</p>
      <a href="#banner">Commission us to build your service</a>
    </CommissionUs>
  </SectionSeven>
);

export default WhyBuildOnAutonolas;
