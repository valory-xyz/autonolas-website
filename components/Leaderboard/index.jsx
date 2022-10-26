import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { LeaderboardContainer, LeaderboardContent } from './styles';

const Leaderboard = () => (
  <>
    <LeaderboardContainer className="content-list-section">
      <Header className="header" title="Leaderboard" />
    </LeaderboardContainer>

    <LeaderboardContent className="section">
      <div className="leaderboard-table">
        <iframe
          width={920}
          height={425}
          title="leaderboard"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSuZsLhPIkleGOd4LIQL6gmJuZhsF0-6JcsqsVkZ08W5AAmIxkxO41aSUi5Csssf2z9IhfXspYCAy1o/pubhtml?gid=659479338&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </div>
      <Button
        title="LEARN MORE"
        type="black"
        className="mini"
        onClick={() => window.open('https://discord.gg/4xhAHuy4Y3')}
      />
    </LeaderboardContent>
  </>
);

export default Leaderboard;
