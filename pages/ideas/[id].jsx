import { get } from 'lodash';
import EachIdea from 'components/Ideas/EachIdea';
import { getIdea } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';

export async function getServerSideProps({ query }) {
  const id = get(query, 'id');
  const idea = await getIdea(id);

  if (!idea) {
    return serverRedirectToError();
  }

  return {
    props: {
      idea,
    },
  };
}

export default EachIdea;
