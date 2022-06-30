import { get } from 'lodash';
import { getEducationArticle } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';
import EachEducationArticle from 'components/Education/EachEducationArticle';

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

export default EachEducationArticle;
