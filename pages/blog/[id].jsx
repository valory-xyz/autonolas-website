import get from 'lodash/get';
import Head from 'next/head';
import { SITE_URL } from 'util/constants';
import { getBlog } from 'common-util/api';
import Meta from 'common-util/meta';
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
      <Head>
        <Meta meta={meta} />
      </Head>
      <EachBlog {...props} />
    </>
  );
};

export default EachBlogPage;
