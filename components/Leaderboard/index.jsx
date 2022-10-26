import { Grid } from 'antd';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import Button from 'common-util/Button';
import { DescActionButtons } from '../HomePage/1TheNewWay/styles';
import { LeaderboardContainer, LeaderboardContent } from './styles';

const { useBreakpoint } = Grid;

const getSize = sizes => {
  // till `lg` width will be 920
  if (sizes.lg) {
    return { width: 920, height: 425 };
  }

  if (sizes.sm) {
    return { width: 640, height: 500 };
  }

  if (sizes.xs) {
    return { width: 320, height: 400 };
  }

  return { width: 920, height: 425 };
};

const Leaderboard = () => {
  const screens = useBreakpoint();
  const { width, height } = getSize(screens);

  return (
    <>
      <LeaderboardContainer className="content-list-section">
        <Header className="header" title="Community Leaderboard" />
      </LeaderboardContainer>

      <LeaderboardContent className="section">
        <Header className="header" title="Current Rankings" />

        <div className="leaderboard-table">
          <iframe
            style={width < 650 ? { width: '100%' } : {}}
            width={width}
            height={height}
            title="leaderboard"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSuZsLhPIkleGOd4LIQL6gmJuZhsF0-6JcsqsVkZ08W5AAmIxkxO41aSUi5Csssf2z9IhfXspYCAy1o/pubhtml?gid=659479338&amp;single=true&amp;widget=true&amp;headers=false"
          />
        </div>

        <DescActionButtons>
          <Description
            type={2}
            title={(
              <>
                To learn more about the Community Leaderboard, including ways
                you can earn points and see your name up in lights, join us on
                the Discord!
              </>
            )}
          />

          <div className="action-btns">
            <Button
              title="JOIN DISCORD"
              type="purple"
              onClick={() => window.open('https://discord.gg/4xhAHuy4Y3')}
            />
          </div>
        </DescActionButtons>
      </LeaderboardContent>
    </>
  );
};

export default Leaderboard;
