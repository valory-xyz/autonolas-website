import React from 'react';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import { SeeAllBtnRow } from 'components/GlobalStyles';
import Tag from 'common-util/Tag';
import { SectionEight, Content } from './styles';

const LIST = [
  {
    type: 'Ops',
    title: 'Asset Management',
    desc: 'Enable DAOs to execute trade, yield, diversification strategies and more, all with minimal input from DAOs.',
    imageUrl: '/images/8WhatCouldYouBuild/asset-management.png',
    blueprint: '3 implementation blueprints',
    detailsLink: 'https://www.google.com/',
  },
  {
    type: 'Apps',
    title: 'Smart Wallet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/images/8WhatCouldYouBuild/smart-wallet.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
  {
    type: 'Apps',
    title: 'Keeper Service',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/images/8WhatCouldYouBuild/asset-management.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
  {
    type: 'Ops',
    title: 'Asset Management',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/images/8WhatCouldYouBuild/smart-wallet.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
  {
    type: 'Apps',
    title: 'Oracle',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/images/8WhatCouldYouBuild/asset-management.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
];

const PhaseShiftInDapp = () => (
  <SectionEight className="section section-8" id="product">
    <Header className="header" title="What could you build?" />

    <Content>
      {LIST.map(
        ({
          title, imageUrl, type, blueprint, desc, detailsLink,
        }, index) => (
          <div className={`column column-${index + 1}`}>
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
            <Button
              title={detailsLink ? 'DETAILS' : 'REQUEST DETAILS'}
              type="black"
              className="mini"
              onClick={() => {
                if (detailsLink) window.open('https://docs.autonolas.network/');
              }}
            />
          </div>
        ),
      )}
    </Content>

    <SeeAllBtnRow>
      <Button
        title="See all"
        type="link-arrow"
        onClick={() => window.open('https://docs.autonolas.network/')}
      />
    </SeeAllBtnRow>
  </SectionEight>
);

export default PhaseShiftInDapp;
