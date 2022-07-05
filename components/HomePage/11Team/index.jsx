import React from 'react';
import PropTypes from 'prop-types';
import PATHS from 'util/paths';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import { ThreeColumnContents } from 'components/GlobalStyles';
import EachTeamMate from './EachTeamMate';
import { SectionEleven, TeamFooter } from './styles';

const Team = ({ cofounders, foundingTeam }) => (
  <SectionEleven className="section section-team" id="team">
    <Header className="header" title="Core Team" />
    <Description type={2} title="CO-FOUNDERS" />

    <ThreeColumnContents className="team-column-contents">
      {cofounders
        .sort((a, b) => a.id - b.id)
        .map(({ id, attributes }) => (
          <EachTeamMate key={`team-mate-${id}`} member={attributes} />
        ))
      }
    </ThreeColumnContents>

    <TeamFooter>
      <a href={`/${PATHS.TEAM}`} className="no-underline">
        <Button
          title={`See full team (${foundingTeam.length + cofounders.length})`}
          type="link-arrow"
        />
      </a>

      <Button
        title="See job openings"
        type="link-arrow"
        onClick={() => window.open('https://angel.co/company/valory-3')}
      />
    </TeamFooter>
  </SectionEleven>
);

Team.propTypes = {
  cofounders: PropTypes.instanceOf(Array).isRequired,
  foundingTeam: PropTypes.instanceOf(Array).isRequired,
};

export default Team;
