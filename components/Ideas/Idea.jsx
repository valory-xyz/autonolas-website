/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import Tag from 'common-util/Tag';
import { EachIdeaContainer, SubHeader, BluePrint } from './styles';

// TODO: remove
const LIST = [
  {
    id: 1,
    distribution: 'A-1',
    implementation_plan: 'B-1',
    name: 'C-1',
    nickname: 'D-1',
  },
  {
    id: 2,
    distribution: 'A-2',
    implementation_plan: 'B-2',
    name: 'C-2',
    nickname: 'D-2',
  },
];

const EachIdea = ({ idea }) => {
  const { attributes } = idea;
  const {
    category,
    description,
    image,
    type,
    benefit_to_dao,
    blueprints = LIST,
    monetisation,
  } = attributes || {};
  const imageUrl = get(image, 'data[0].attributes.url') || '';

  return (
    <EachIdeaContainer className="each-content">
      <div
        className="each-content-header-image"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
        }}
      />

      <div className="each-content-body">
        <Header className="header" title={category} />
        <br />

        <div className="each-content-details">
          <Tag>{type}</Tag>
          <div className="subtitle">{description}</div>
          <div className="body">
            <SubHeader>Benefit to DAOs</SubHeader>
            <p>{benefit_to_dao}</p>

            <SubHeader>Monetisation Options</SubHeader>
            <p className="monetisation">{monetisation}</p>

            <SubHeader>{`Imprementation Blueprints (${blueprints.length})`}</SubHeader>
            <div className="blueprints">
              {blueprints.map(blueprint => {
                const {
                  distribution,
                  implementation_plan,
                  id,
                  name,
                  nickname,
                } = blueprint || {};
                return (
                  <BluePrint key={`blueprint-${id}`}>
                    <p>{distribution}</p>
                    <p>{implementation_plan}</p>
                    <p>{name}</p>
                    <p>{nickname}</p>
                  </BluePrint>
                );
              })}
            </div>
          </div>

          <a href={`/${PATHS.IDEAS}`}>
            <Button title="BACK TO IDEAS" />
          </a>
        </div>
      </div>
    </EachIdeaContainer>
  );
};

EachIdea.propTypes = {
  idea: PropTypes.instanceOf(Object),
};

EachIdea.defaultProps = {
  idea: null,
};

export default EachIdea;
