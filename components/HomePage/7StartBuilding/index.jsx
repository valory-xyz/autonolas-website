import React from 'react';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Link from 'next/link';
import { SectionSeven, Container, CommissionUs } from './styles';

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
    redirectTo: '/academy',
  },
];

const WhyBuildOnAutonolas = () => (
  <SectionSeven className="section" id="build">
    <Header className="header center" title="Start Building" />

    <Container>
      {LIST.map(({
        heading, subHeading, imageUrl, redirectTo,
      }, index) => (
        <div key={imageUrl} className={`column column-${index + 1}`}>
          <div className="img-container-custom">
            <img
              src={`/images/7StartBuilding/${imageUrl}.png`}
              alt={`${heading} Icon`}
            />
          </div>
          <div className="text-content">
            <div className="header-text">{heading}</div>
            <div className="sub-text">{subHeading}</div>
            <div className="action-btn">
              <Link href={redirectTo} passHref>
                <Button title="GET STARTED" type="black" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Container>

    <CommissionUs>
      <p>Don’t have time to build right now?</p>
      <a href="mailto:bd@valory.xyz">Commission us to build your service</a>
    </CommissionUs>
  </SectionSeven>
);

export default WhyBuildOnAutonolas;
