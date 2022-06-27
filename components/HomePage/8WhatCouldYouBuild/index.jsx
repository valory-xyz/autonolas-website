import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
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
    description:
      'Enable DAOs to execute trade, yield, diversification strategies and more, all with minimal input from DAOs.',
    image: '/images/8WhatCouldYouBuild/asset-management.png',
    blueprint: '3 implementation blueprints',
    detailsLink: 'https://www.google.com/',
  },
  {
    id: 2,
    type: 'Apps',
    title: 'Smart Wallet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/8WhatCouldYouBuild/smart-wallet.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
  {
    id: 3,
    type: 'Apps',
    title: 'Keeper Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/8WhatCouldYouBuild/asset-management.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
  {
    id: 4,
    type: 'Ops',
    title: 'Asset Management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/8WhatCouldYouBuild/smart-wallet.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
  {
    id: 5,
    type: 'Apps',
    title: 'Oracle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/8WhatCouldYouBuild/asset-management.png',
    blueprint: '3 implementation blueprints',
    detailsLink: null,
  },
];

const WhatCouldYouBuild = ({ ideas }) => {
  const list = ideas.length === 0 ? LIST : ideas.slice(0, 6);

  return (
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
        {list.map(
          (
            {
              title, image, type, blueprint, description, detailsLink, id,
            },
            index,
          ) => {
            const imageUrl = get(image, 'data.attributes.url') || '';

            return (
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
                <div className="desc">{description}</div>
                <div className="sub-text">{blueprint}</div>
                {/* TODO */}
                <Button
                  title={detailsLink ? 'DETAILS' : 'REQUEST DETAILS'}
                  type="black"
                  className="mini"
                  onClick={() => window.open(`${window.location.origin}/ideas/${id}`)}
                />
              </div>
            );
          },
        )}
      </Content>
    </SectionWhatCouldYouBuild>
  );
};

WhatCouldYouBuild.propTypes = {
  ideas: PropTypes.instanceOf(Array).isRequired,
};

export default WhatCouldYouBuild;
