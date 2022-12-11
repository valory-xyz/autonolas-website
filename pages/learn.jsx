import { getEducationArticles } from 'common-util/api';
import LearnPage from 'components/HomePage/Learn';

export async function getServerSideProps() {
  const educationArticles = await getEducationArticles();

  return {
    props: {
      educationArticles: educationArticles.slice(0, 3) /* only 3 items */,
    },
  };
}

export default LearnPage;
