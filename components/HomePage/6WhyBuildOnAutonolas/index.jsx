import React from 'react';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { SectionSix, Content } from './styles';

const LIST = [
  {
    imageUrl: 'edge',
    heading: 'GET ON EDGE',
    subHeading: 'Overcome the constraints of current developer tools, and get traction in an ocea of new opportunity.',
  },
  {
    imageUrl: 'pioneer',
    heading: 'BECOME A PIONEER',
    subHeading: 'Get up to speed with cutting-edge tech stack, and make a name driving autonomy forward.',
  },
  {
    imageUrl: 'business-model',
    heading: 'EXPLORE A NEW BUSINESS MODEL',
    subHeading: 'Get the flexibility of open-source, the impact of entrepreneurship, all via a predictable on-chain protocol.',
  },
];

const WhyBuildOnAutonolas = () => (
  <SectionSix className="section section-6" id="developers">
    <Description type={2} title="BUILD" className="center" />

    <Header
      className="header"
      title="Why build on Autonolas?"
    />

    <Content>
      {LIST.map((item, index) => (
        <div className={`column column-${index + 1}`}>
          <div className="img-container">
            <img
              src={`/images/6WhyBuildOnAutonolas/${item.imageUrl}.png`}
              alt={`${item.heading} Icon`}
            />
          </div>
          <div className="header-text">{item.heading}</div>
          <div className="sub-text">{item.subHeading}</div>
        </div>
      ))}
    </Content>
  </SectionSix>
);

export default WhyBuildOnAutonolas;
