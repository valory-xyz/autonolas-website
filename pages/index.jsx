import get from 'lodash/get';
import qs from 'qs';
import HomePage from 'components/HomePage';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export async function getServerSideProps() {
  // ----------- TEAM -----------
  const teamQuery = qs.stringify({
    sort: ['name:asc'],
    populate: '*',
  });

  const teamResponse = await fetch(`${URL}/team-members?${teamQuery}`);
  const teamMembersJson = await teamResponse.json();
  const cofounders = (get(teamMembersJson, 'data') || []).filter(
    ({ attributes }) => !!attributes.cofounder, // only co-founders
  );

  const foundingTeam = (get(teamMembersJson, 'data') || []).filter(
    ({ attributes }) => !attributes.cofounder, // except co-founders
  );

  // ----------- PRESS -----------
  const pressQuery = qs.stringify({
    sort: ['datePublished:asc'],
    _limit: 5,
    populate: '*',
  });
  const pressResponse = await fetch(`${URL}/media-appearances?${pressQuery}`);
  const pressJson = await pressResponse.json();
  const press = get(pressJson, 'data') || [];

  // ----------- BLOGS -----------
  const blogsQuery = qs.stringify({
    sort: ['datePublished:asc'],
    _limit: 5,
    populate: '*',
  });
  const blogsResponse = await fetch(`${URL}/blog-posts?${blogsQuery}`);
  const blogsJson = await blogsResponse.json();
  const blogs = get(blogsJson, 'data') || [];

  return {
    props: {
      cofounders,
      foundingTeam,
      press,
      blogs,
    },
  };
}

export default HomePage;
