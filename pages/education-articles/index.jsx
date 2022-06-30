import Education from 'components/Education';
import { getEducationArticles } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';

export async function getServerSideProps() {
  const educationArticles = await getEducationArticles();

  if (!educationArticles) {
    return serverRedirectToError();
  }

  return {
    props: {
      educationArticles,
    },
  };
}


export default Education;
