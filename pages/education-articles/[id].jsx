import { get } from 'lodash';
import { SITE_URL } from 'util/constants/site';
import { getEducationArticle } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';
import Meta from 'common-util/meta';
import EachEducationArticle from 'components/Education/EachEducationArticle';

// TODO: move to strapi
const DESCRIPTION = {
  1: 'Learn what makes autonomous services different in this quick intro article',
  2: 'Learn how autonomous services work in this quick intro article',
  3: 'Learn what Autonolas is in this quick intro article',
  4: 'Learn what we mean by autonomy in this quick intro article',
};

export async function getServerSideProps({ query }) {
  const id = get(query, 'id');
  const educationArticle = await getEducationArticle(id);

  if (!educationArticle) {
    return serverRedirectToError();
  }

  return {
    props: {
      educationArticle,
    },
  };
}

const EachEducationArticlePage = props => {
  const attributes = get(props, 'educationArticle.attributes');
  const id = get(props, 'educationArticle.id');

  const { title, headerImage } = attributes || {};
  const imageUrl = get(headerImage, 'data.attributes.url') || '';

  const meta = {
    siteUrl: `${SITE_URL}/education-articles/${id}`,
    title: `Autonolas | Quick Intro: ${title}`,
    description: DESCRIPTION[id],
    image: `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`,
  };

  return (
    <>
      <Meta meta={meta} />
      <EachEducationArticle {...props} />
    </>
  );
};

export default EachEducationArticlePage;
