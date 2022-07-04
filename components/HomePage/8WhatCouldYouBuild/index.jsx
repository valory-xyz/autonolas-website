import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PATHS from 'util/paths';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Tag from 'common-util/Tag';
import { ThreeColumnContents } from 'components/GlobalStyles';
import { SectionWhatCouldYouBuild, SeeAll } from './styles';

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
          <span className="sub-text">you</span>
            &nbsp;build?
        </>
        )}
    />

    <SeeAll>
      <a href={`/${PATHS.IDEAS}`} className="no-underline">
        <Button
          title="See all"
          type="link-arrow"
        />
      </a>
    </SeeAll>

    <ThreeColumnContents>
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
                <div className="sub-text">{blueprint}</div>
                {/* TODO */}
                <Button
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
    </ThreeColumnContents>
  </SectionWhatCouldYouBuild>
);

WhatCouldYouBuild.propTypes = {
  ideas: PropTypes.instanceOf(Array).isRequired,
};

export default WhatCouldYouBuild;
