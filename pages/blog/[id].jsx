import get from 'lodash/get';
import { SITE_URL } from 'util/constants/site';
import { getBlog, isIdUsedToFetchBlog } from 'common-util/api';
import Meta from 'common-util/meta';
import { serverRedirectToError } from 'common-util/functions';
import EachBlog from 'components/Blog/EachBlog';

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const id = get(query, 'id');
  const blog = await getBlog(id);
  const slug = get(blog, 'attributes.slug');

  // slug should always be present if query is `id` or `slug`
  // else redirect to error page
  if (!slug) {
    return serverRedirectToError();
  }

  // if `id` is used, redirect it to the same page with query as `slug`
  if (isIdUsedToFetchBlog(id)) {
    return {
      redirect: {
        destination: `/blog/${slug}`,
        /**
         * https://stackoverflow.com/questions/1393280/http-redirect-301-permanent-vs-302-temporary/1393298#1393298
         * 301 = permanent: true
         */
        permanent: true,
      },
    };
  }

  return {
    props: {
      blog,
    },
  };
}

const EachBlogPage = props => {
  const attributes = get(props, 'blog.attributes');
  const id = get(props, 'blog.id');

  const { title, subtitle, headerImage } = attributes || {};
  const imageUrl = get(headerImage, 'data[0].attributes.url') || '';

  const meta = {
    siteUrl: `${SITE_URL}/blog/${id}`,
    title,
    description: subtitle,
    image: `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`,
  };

  return (
    <>
      <Meta meta={meta} />
      <EachBlog {...props} />
    </>
  );
};

export default EachBlogPage;
