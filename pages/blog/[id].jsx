import { get } from 'lodash';
import { getBlog } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';
import EachBlog from 'components/Blog/EachBlog';

export async function getServerSideProps({ query }) {
  const id = get(query, 'id');
  const blog = await getBlog(id);

  if (!blog) {
    return serverRedirectToError();
  }

  return {
    props: {
      blog,
    },
  };
}

export default EachBlog;
