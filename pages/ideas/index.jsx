import Ideas from 'components/Ideas';
import { getIdeas } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';

export async function getServerSideProps() {
  const ideas = await getIdeas();

  if (!ideas) {
    return serverRedirectToError();
  }

  return {
    props: {
      ideas,
    },
  };
}

export default Ideas;
