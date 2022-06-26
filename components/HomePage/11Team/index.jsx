import React from 'react';
import PropTypes from 'prop-types';
import Header from 'common-util/Header';
import get from 'lodash/get';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { getSocials } from 'common-util/functions';
import { SectionEleven, Content, TeamFooter } from './styles';

const Team = ({ cofounders, foundingTeam }) => (
  <SectionEleven className="section section-11">
    <Header className="header" title="Core Team" />
    <Description type={2} title="CO-FOUNDERS" />

    <Content>
      {cofounders.map(({ id, attributes }, index) => {
        const {
          name, description, title, image, twitterUrl, linkedinUrl,
        } = attributes || {};
        const imageUrl = get(image, 'data.attributes.url');
        const socials = [];
        if (twitterUrl) socials.push({ type: 'twitter', url: twitterUrl });
        if (linkedinUrl) socials.push({ type: 'linkedin', url: linkedinUrl });

        return (
          <div
            className={`column column-${index + 1}`}
            key={`column-${id + 1}`}
          >
            <div
              className="img-container"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${imageUrl})`,
              }}
            />
            <div className="header-text">{name}</div>
            <div className="sub-text">{title}</div>
            <div className="desc">{description}</div>
            {getSocials(socials, 'svg')}
          </div>
        );
      })}
    </Content>

    <TeamFooter>
      <Button
        title={`See full team (${foundingTeam.length})`}
        type="link-arrow"
        onClick={() => window.open('https://docs.autonolas.network/')}
      />

      <Button
        title="See job openings"
        type="link-arrow"
        onClick={() => window.open('https://docs.autonolas.network/')}
      />
    </TeamFooter>
  </SectionEleven>
);

Team.propTypes = {
  cofounders: PropTypes.instanceOf(Array).isRequired,
  foundingTeam: PropTypes.instanceOf(Array).isRequired,
};

export default Team;
