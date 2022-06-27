import React from 'react';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Tag from 'common-util/Tag';
import { SectionWhatCouldYouBuild, SeeAll, Content } from './styles';

// TODO: remove
const LIST = [
  {
    id: 1,
    type: 'Ops',
    title: 'Asset Management',
    desc: 'Enable DAOs to execute trade, yield, diversification strategies and more, all with minimal input from DAOs.',
    imageUrl: '/images/8WhatCouldYouBuild/asset-management.png',
    blueprint: '3 implementation blueprints',
    detailsLink: 'https://www.google.com/',
  },
  {
    id: 2,
    type: 'Apps',
    title: 'Smart Wallet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/images/8WhatCouldYouBuild/smart-wallet.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
  {
    id: 3,
    type: 'Apps',
    title: 'Keeper Service',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/images/8WhatCouldYouBuild/asset-management.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
  {
    id: 4,
    type: 'Ops',
    title: 'Asset Management',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/images/8WhatCouldYouBuild/smart-wallet.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
  {
    id: 5,
    type: 'Apps',
    title: 'Oracle',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/images/8WhatCouldYouBuild/asset-management.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
];

const WhatCouldYouBuild = () => (
  <SectionWhatCouldYouBuild
    className="section section-what-could-you-build"
    id="idea"
  >
    <Header
      className="header"
      title={(
        <>
          What could&nbsp;
          <span className="sub-text">you</span>
          &nbsp;build?
        </>
      )}
    />

    <SeeAll>
      <Button
        title="See all"
        type="link-arrow"
        onClick={() => window.open(`${window.location.origin}/ideas`)}
      />
    </SeeAll>

    <Content>
      {LIST.map(
        ({
          title, imageUrl, type, blueprint, desc, detailsLink, id,
        }, index) => (
          <div
            className={`column column-${index + 1}`}
            key={`what-could-you-build-${id}`}
          >
            <div
              className="img-container"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />
            <Tag>{type}</Tag>
            <div className="header-text">{title}</div>
            <div className="desc">{desc}</div>
            <div className="sub-text">{blueprint}</div>
            {/* TODO */}
            <Button
              title={detailsLink ? 'DETAILS' : 'REQUEST DETAILS'}
              type="black"
              className="mini"
              onClick={() => window.open(`${window.location.origin}/ideas/${id}`)}
            />
          </div>
        ),
      )}
    </Content>
  </SectionWhatCouldYouBuild>
);

export default WhatCouldYouBuild;
