import React from 'react';
import PropTypes from 'prop-types';
import Header from 'common-util/Header';
import Button from 'common-util/Button';
import Description from 'common-util/Description';
import EachTeamMate from './EachTeamMate';
import { SectionEleven, Content, TeamFooter } from './styles';

const Team = ({ cofounders, foundingTeam }) => (
  <SectionEleven className="section section-team" id="team">
    <Header className="header" title="Core Team" />
    <Description type={2} title="CO-FOUNDERS" />

    <Content>
      {cofounders.map(({ id, attributes }) => <EachTeamMate key={`team-mate-${id}`} member={attributes} />)}
    </Content>

    <TeamFooter>
      <Button
        title={`See full team (${foundingTeam.length})`}
        type="link-arrow"
        onClick={() => window.open(`${window.location.origin}/team`)}
      />

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
