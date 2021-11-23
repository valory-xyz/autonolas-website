import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { SectionFour } from './styles';

const LIST = [
  {
    title: 'off-chain stack',
    desc: 'For building autonomous apps with an open-source, agent-based, truly composable software framework.',
  },
  {
    title: 'Smart Contract Chains and Apps',
    desc: '',
  },
  {
    title: 'on-chain protocol',
    desc: 'For coordinating and securing the individual apps.',
  },
];

const WhatAreWeBuilding = () => (
  <SectionFour className="section section-4 border-boxes">
    <Header className="header" title="What are we building?" />
    <div className="bg-image" />

    <div className="row">
      {LIST.map(({ title, desc }, index) => {
        const getId = () => `what-we-are-building-${index}`;

        return (
          <div className={`column column-${index + 1}`} key={getId()}>
            <div className="content">
              <div className="title description-l-3">{title}</div>
              <div className="text description-l-4">{desc}</div>
            </div>
          </div>
        );
      })}
    </div>

    <Button
      type="disabled"
      className="btn-center"
      title={(
        <>
          <span>Get Educated</span>
          <span>(Coming Soon)</span>
        </>
      )}
    />
  </SectionFour>
);

export default WhatAreWeBuilding;
