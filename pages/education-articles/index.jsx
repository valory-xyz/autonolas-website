import { SITE_URL } from 'util/constants/site';
import EducationComponent from 'components/Education';
import Meta from 'common-util/meta';
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

const Education = props => (
  <>
    <Meta
      meta={{
        siteUrl: `${SITE_URL}/education-articles`,
        title: 'Autonolas | Education Articles',
      }}
    />
    <EducationComponent {...props} />
  </>
);

export default Education;
