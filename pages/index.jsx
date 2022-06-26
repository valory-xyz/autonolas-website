import get from 'lodash/get';
import HomePage from 'components/HomePage';

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/team-members?sort[0]=name&populate=*`,
  );
  const teamMembers = await res.json();
  const cofounders = (get(teamMembers, 'data') || []).filter(
    ({ attributes }) => !!attributes.cofounder,
  );

  // except co-founders
  const foundingTeam = (get(teamMembers, 'data') || []).filter(
    ({ attributes }) => !attributes.cofounder,
  );

  return {
    props: {
      cofounders,
      foundingTeam,
    },
  };
}

export default HomePage;
