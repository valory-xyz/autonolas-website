import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Tag from 'common-util/Tag';
import { ThreeColumnContents } from 'components/GlobalStyles';
import { Col, Row } from 'antd';
import Description from 'common-util/Description';
import Title from 'antd/lib/typography/Title';
import Link from 'next/link';
import Text from 'antd/lib/typography/Text';
import { SectionWhatCouldYouBuild, SeeAll, IdeaGroup } from './styles';
import CustomButton from 'common-util/Button';

const ideaGroups = [
  {
    id: 'internal-dao-operations',
    title: 'Internal DAO Operations',
    ideas: [
      {
        id: 'asset-whitelisting',
        title: 'Asset Whitelisting',
        description: 'Dynamically evaluates assets based on diverse datasets to add and remove from whitelists.',
      },
      {
        id: 'meta-yield-hunter',
        title: 'Meta Yield Hunter',
        description: 'Use machine learning to track yield opportunities across chains and protocols. Autonomously move positions to optimize yield.',
      },
      {
        id: 'contribution-coordinator',
        title: 'Contribution Coordinator',
        description: 'Reduce the need for complex DAO management hierarchies. Watch for contributions on Github, Twitter etc and adjust on-chain rewards & permissions accordingly.',
      },
    ],
  },
  {
    id: 'new-services',
    title: 'New Services',
    ideas: [
      {
        id: 'web3-native-recommender',
        title: 'Web3-native Recommender',
        description: 'Build the first co-owned and operated engines to track opportunities and make personalized recommendations to crypto users.',
      },
      {
        id: 'nft-collector',
        title: 'NFT Collector',
        description: 'Allow users to passively build exposure to quality baskets of NFTs.',
      },
      {
        id: 'fund-manager',
        title: 'Fund Manager',
        description: 'Overcome the legal and trust challenges of running a decentralized fund.',
      },
    ],
  },
  {
    id: 'customizable-app-infra',
    title: 'Customizable App Infra',
    ideas: [
      {
        id: 'oracles',
        title: '*Oracles (On-chain Data Reporter)',
        description: 'Build future-proof oracles that are totally customizable, without permission, and owned by you.',
      },
      {
        id: 'keeper',
        title: 'Keepers',
        description: 'Build robust keeper systems that you can extend to maintain any on-chain data, based on a rich set of criteria which you define.',
      },
      {
        id: 'bridges',
        title: 'Bridges (Cross-chain Messenger)',
        description: 'Spin up your own bridges to sync any type of data across chains and infrastructure. Combine with your oracles and keepers to build rich new services.',
      },
    ],
  },
];

const WhatCouldYouBuild = ({ ideas }) => (
  <SectionWhatCouldYouBuild
    className="section section-what-could-you-build"
    id="idea"
  >
    <Header
      className="header"
      title={(
        <>
          What could&nbsp;
          <br />
          <span className="sub-text">you</span>
            &nbsp;build?
        </>
        )}
    />

    {/* <SeeAll>
      <a href={`/${PATHS.IDEAS}`} className="no-underline">
        <Button
          title="See all"
          type="link-arrow"
        />
      </a>
    </SeeAll> */}

    {/* <ThreeColumnContents>
      {(ideas || []).slice(0, 6).map(
        (
          {
            title, image, type, blueprint, description, detailsLink, id,
          },
          index,
        ) => {
          const imageUrl = get(image, 'data.attributes.url') || '';

          return (
            <div className="details" key={`what-could-you-build-${id}`}>
              <div className={`column column-${index + 1}`}>
                <div
                  className="img-container"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                />
                <Tag>{type}</Tag>
                <div className="header-text">{title}</div>
                <div className="desc">{description}</div>
                <div className="sub-text">{blueprint}</div> */}
    {/* TODO */}
    {/* <Button
                  title={detailsLink ? 'DETAILS' : 'REQUEST DETAILS'}
                  type="black"
                  className="mini"
                  onClick={() => window.open(`${window.location.origin}/ideas/${id}`)}
                />
              </div>
            </div>
          );
        },
      )}
    </ThreeColumnContents> */}

    {
      ideaGroups.map(
        ideaGroup => {
          const { id, ideas, title } = ideaGroup;

          return (
            <IdeaGroup key={id}>
              <Description type={1} title={title} className="group-title" />
              <Row gutter={12}>
                {
                  ideas.map(
                    idea => (
                      <Col xs={24} lg={8} key={idea.id} className="idea">
                        <Title level={3} className="idea-title">{idea.title}</Title>
                        <Text className="idea-text">{idea.description}</Text>
                      </Col>
                    ),
                  )
                }
              </Row>
            </IdeaGroup>
          );
        },
      )
    }

    <div className="oracle-sell">
      <Title>*Future-proof your stack with a customizable oracle</Title>
      <Text className="oracle-sell-description">Autonolas Oracles are a unique way to advance the capabilities of your stack.</Text>
      <br />
      <Link href="/oracles" passHref><CustomButton title="Learn more" /></Link>
    </div>

    <div className="divider" />

  </SectionWhatCouldYouBuild>
);

WhatCouldYouBuild.propTypes = {
  ideas: PropTypes.instanceOf(Array).isRequired,
};

export default WhatCouldYouBuild;
