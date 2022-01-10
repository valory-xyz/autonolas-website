import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { SectionFive } from './styles';

const LIST = [
  {
    desc: 'Leverage your Python skills into decentralized app development. More languages to follow.',
    imageUrl: '/images/common/python.png',
  },
  {
    desc: 'Enjoy the flexibility and recognition of open source.',
    imageUrl: '/images/common/github-large.svg',
  },
  {
    desc: 'Financial upside of entrepreneurship with radically simpler path to traction.',
    imageUrl: '/images/your-head-start/nft-icon.png',
  },
];

const YourHeadStartIn = () => (
  <SectionFive className="section section-5 border-boxes">
    <div className="description-l-3">BUILT FOR DEVELOPERS</div>

    <Header className="header" title="Your headstart in crypto development" />

    <div className="row">
      {LIST.map(({ imageUrl, desc }, index) => {
        const getId = () => `your-head-start-in-${index}`;
        return (
          <div className="column" key={getId()}>
            <div className="content">
              <img
                src={imageUrl}
                alt={`Your hear start - ${index + 1}`}
                loading="lazy"
                // width={160}
                // height={160}
              />
              <Description className="text" type={4} title={desc} />
            </div>
          </div>
        );
      })}
    </div>

    <Button
      title="Dive into docs"
      className="btn-center"
      onClick={() => window.open('https://valory-xyz.github.io/open-aea/')}
    />
  </SectionFive>
);

export default YourHeadStartIn;
