import React from 'react';
import Header from 'common-util/Header';
import { SectionFour, Row } from './styles';

const DATA = [
  'Services are made up of open-source software agents',
  'Each agent is operated  independently',
  'Services run continuously',
  'Services get data from any data source',
  'They can do complex stuff, even machine learning',
  'Service agents robustly come to consensus about what action to take',
  'Services take action on any chain or API',
];

const WhatAreWeBuilding = () => (
  <SectionFour className="section section-4">
    <Header
      className="header"
      title={(
        <>
          How&nbsp;
          <span className="sub-text">do</span>
          &nbsp;autonomous
          <br />
          services work?
        </>
      )}
    />

    <Row>
      <div className="column column-1" />

      <div className="column column-2">
        {DATA.map((item, index) => {
          const getId = () => `how-autonolas-${index}`;
          return (
            <div className="content" key={getId()}>
              <div className="sr-no">{index + 1}</div>
              <div className="text">{item}</div>
            </div>
          );
        })}
      </div>
    </Row>
  </SectionFour>
);

export default WhatAreWeBuilding;
