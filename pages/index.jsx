import { getBlogs } from 'common-util/api';
import HomePage from 'components/HomePage';

export async function getServerSideProps() {
  const blogs = await getBlogs();

  return {
    props: {
      blogs: blogs.slice(0, 5) /* only 5 blog is required on homepage */,
    },
  };
}

export default HomePage;
