import { getBlogs } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';
import Blog from 'components/Blog';

export async function getServerSideProps() {
  const blogs = await getBlogs();

  if (!blogs) {
    return serverRedirectToError();
  }

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
