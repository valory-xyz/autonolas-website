import get from 'lodash/get';
import qs from 'qs';
import { getTeam, getPress, getBlogs } from 'common-util/api';
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

  const { cofounders, foundingTeam } = await getTeam();
  const press = await getPress();
  const blogs = await getBlogs();

  return {
    props: {
      educationArticles,
      cofounders,
      foundingTeam,
      press: press.slice(0, 3) /* only 3 press is required on homepage */,
      blogs: blogs.slice(0, 5) /* only 5 blog is required on homepage */,
    },
  };
}

export default HomePage;
