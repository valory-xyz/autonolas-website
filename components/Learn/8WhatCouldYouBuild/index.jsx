import React from 'react';
import Header from 'common-util/Header';
import { Col, Row } from 'antd';
import Description from 'common-util/Description';
import Title from 'antd/lib/typography/Title';
import Link from 'next/link';
import Text from 'antd/lib/typography/Text';
import Button from 'common-util/Button';
import { SectionWhatCouldYouBuild, IdeaGroup } from './styles';

const ideaGroups = [
  {
    id: 'internal-dao-operations',
    title: 'Internal DAO Operations',
    ideas: [
      {
        id: 'meta-yield-hunter',
        title: 'Meta Yield Hunter',
        description:
          'Use machine learning to track yield opportunities across chains and protocols. Autonomously move positions to optimize yield.',
      },
      {
        id: 'asset-whitelisting',
        title: 'Asset Whitelisting',
        description:
          'Dynamically evaluates assets based on diverse datasets to add and remove from whitelists.',
      },
      {
        id: 'contribution-coordinator',
        title: 'Contribution Coordinator',
        description:
          'Watch for contributions on Github, Twitter etc and adjust on-chain rewards & permissions accordingly.',
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
        description:
          'Build the first co-owned and operated engines to track opportunities and make personalized recommendations to crypto users.',
      },
      {
        id: 'nft-collector',
        title: 'NFT Collector',
        description:
          'Allow users to passively build exposure to quality baskets of NFTs.',
      },
      {
        id: 'fund-manager',
        title: 'Fund Manager',
        description:
          'Overcome the legal and trust challenges of running a decentralized fund.',
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
        description:
          'Build future-proof oracles that are totally customizable, without permission, and owned by you.',
      },
      {
        id: 'keeper',
        title: 'Keepers',
        description:
          'Build robust keeper systems that you can extend to maintain any on-chain data, based on a rich set of criteria which you define.',
      },
      {
        id: 'bridges',
        title: 'Bridges (Cross-chain Messenger)',
        description:
          'Spin up your own bridges to sync any type of data across chains and infrastructure. Combine with your oracles and keepers to build rich new services.',
      },
    ],
  },
];

const WhatCouldYouBuild = () => (
  <SectionWhatCouldYouBuild
    className="section section-what-could-you-build"
    id="what-could-you-build"
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

    {ideaGroups.map(ideaGroup => {
      const { id, ideas, title } = ideaGroup;

      return (
        <IdeaGroup key={id}>
          <Description type={1} title={title} className="group-title" />
          <Row gutter={48}>
            {ideas.map(idea => (
              <Col xs={24} lg={8} key={idea.id} className="idea">
                <Title level={3} className="idea-title">
                  {idea.title}
                </Title>
                <Text className="idea-text">{idea.description}</Text>
              </Col>
            ))}
          </Row>
        </IdeaGroup>
      );
    })}

    <div className="oracle-sell">
      <Title>*Future-proof your stack with a customizable oracle</Title>
      <Text className="oracle-sell-description">
        Autonolas Oracles are a unique way to advance the capabilities of your
        stack.
      </Text>
      <br />
      <Link href="/oracles" passHref>
        <Button title="Learn more" />
      </Link>
    </div>

    <div className="divider" />
  </SectionWhatCouldYouBuild>
);

export default WhatCouldYouBuild;
