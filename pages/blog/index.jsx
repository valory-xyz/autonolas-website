import { SITE_URL } from 'util/constants/site';
import { getBlogs } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';
import Meta from 'common-util/meta';
import BlogComponent from 'components/Blog';

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

const Blog = props => (
  <>
    <Meta meta={{ siteUrl: `${SITE_URL}/blog`, title: 'Autonolas | Blog' }} />
    <BlogComponent {...props} />
  </>
);

export default Blog;
