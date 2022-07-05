import {
  getEducationArticles, getTeam, getPress, getBlogs,
} from 'common-util/api';
import HomePage from 'components/HomePage';

export async function getServerSideProps() {
  const educationArticles = await getEducationArticles();
  const { cofounders, foundingTeam } = await getTeam();
  const press = await getPress();
  const blogs = await getBlogs();

  return {
    props: {
      educationArticles: educationArticles.slice(0, 3) /* only 3 items */,
      cofounders,
      foundingTeam,
      press: press.slice(0, 3) /* only 3 press is required on homepage */,
      blogs: blogs.slice(0, 5) /* only 5 blog is required on homepage */,
    },
  };
}

export default HomePage;
