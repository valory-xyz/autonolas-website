import Meta from 'common-util/meta';
import { SITE_URL } from 'util/constants/site';
import LeaderboardComponent from 'components/Leaderboard';

const Leaderboard = props => {
  const meta = {
    siteUrl: `${SITE_URL}/leaderboard`,
    title: 'Autonolas | Community Leaderboard',
    // description: DESCRIPTION[id],
    // image: `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`,
  };

  return (
    <>
      <Meta meta={meta} />
      <LeaderboardComponent {...props} />
    </>
  );
};

export default Leaderboard;
