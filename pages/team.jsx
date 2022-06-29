import Team from 'components/Team';

import { getTeam } from 'common-util/api';

export async function getServerSideProps() {
  const { cofounders, foundingTeam } = await getTeam();

  return {
    props: {
      cofounders,
      foundingTeam,
    },
  };
}

export default Team;
