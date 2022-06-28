import { getBlogs } from 'common-util/api';
import Blog from 'components/Blog';

export async function getServerSideProps() {
  const blogs = await getBlogs();

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
