/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import Tag from 'common-util/Tag';
import {
  EachIdeaContainer,
  SubHeader,
  BluePrint,
  BenefitName,
  BenefitDistribution,
} from './styles';

const EachIdea = ({ idea }) => {
  const { attributes } = idea;
  const {
    category,
    description,
    image,
    type,
    benefit_to_dao,
    blueprints: blueprintsData,
    monetisation,
  } = attributes || {};
  const imageUrl = get(image, 'data[0].attributes.url') || '';
  const blueprints = get(blueprintsData, 'data') || [];

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
          <div className="subtitle subtitle-desc">{description}</div>
          <div className="body">
            <SubHeader>Benefit to DAOs</SubHeader>
            <p>{benefit_to_dao}</p>

            <SubHeader>Monetisation Options</SubHeader>
            <p className="monetisation">{monetisation}</p>

            <SubHeader>{`Implementation Blueprints (${blueprints.length})`}</SubHeader>
            <div className="blueprints">
              {blueprints.map(({ id, attributes: blueprint }) => {
                const {
                  distribution, implementation_plan, name, nickname,
                } = blueprint || {};
                return (
                  <BluePrint key={`blueprint-${id}`}>
                    <BenefitName>{name}</BenefitName>
                    <p>{nickname}</p>
                    <p>{implementation_plan}</p>

                    <BenefitDistribution>Distribution</BenefitDistribution>
                    <p>{distribution}</p>
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
