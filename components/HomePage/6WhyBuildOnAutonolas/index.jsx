import React from 'react';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { SectionSix, Container } from './styles';

const LIST = [
  {
    imageUrl: 'edge',
    heading: 'GET AN EDGE',
    subHeading:
      'Overcome the constraints of current developer tools, and get traction in an ocean of new opportunity.',
  },
  {
    imageUrl: 'pioneer',
    heading: 'BECOME A PIONEER',
    subHeading:
      'Get up to speed with cutting-edge tech stack, and make a name driving autonomy forward.',
  },
  {
    imageUrl: 'business-model',
    heading: 'EXPLORE A NEW BUSINESS MODEL',
    subHeading:
      'Get the flexibility of open-source and the impact of entrepreneurship, all via a predictable on-chain protocol.',
  },
];

const WhyBuildOnAutonolas = () => (
  <SectionSix className="section" id="build">
    <Description type={2} title="BUILD" className="center" />

    <Header className="header center" title="Why build on Autonolas?" />

    <Container>
      {LIST.map(({ imageUrl, heading, subHeading }, index) => (
        <div key={imageUrl} className={`column column-${index + 1}`}>
          <div className="img-container">
            <img
              src={`/images/6WhyBuildOnAutonolas/${imageUrl}.png`}
              alt={`${heading} Icon`}
            />
          </div>
          <div className="text-content">
            <div className="header-text">{heading}</div>
            <div className="sub-text">{subHeading}</div>
          </div>
        </div>
      ))}
    </Container>

    <div className="divider" />
  </SectionSix>
);

export default WhyBuildOnAutonolas;
