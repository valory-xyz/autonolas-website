import get from 'lodash/get';
import qs from 'qs';
import { getBlogs } from 'common-util/api';
import HomePage from 'components/HomePage';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export async function getServerSideProps() {
  // ----------- EDUCATION ARTICLES -----------
  const educationQuery = qs.stringify({
    populate: '*',
  });

  const educationResponse = await fetch(
    `${URL}/education-articles?${educationQuery}`,
  );
  const educationJson = await educationResponse.json();
  const educationArticles = get(educationJson, 'data') || [];

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
  const blogs = await getBlogs();

  return {
    props: {
      educationArticles,
      cofounders,
      foundingTeam,
      press,
      blogs: blogs.slice(0, 5) /* only 5 blog is required on homepage */,
    },
  };
}

export default HomePage;
