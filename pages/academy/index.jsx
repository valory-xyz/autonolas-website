import { SITE_URL } from 'util/constants';
import Meta from 'common-util/meta';
import Academy from 'components/Academy/LandingPage';

const LandingPage = props => {
  const meta = {
    siteUrl: `${SITE_URL}/academy`,
    title: 'Autonolas | Autonolas Academy',
    description: 'Learn to build and run your own autonomous services with our self-guided program.',
    image: `${process.env.NEXT_PUBLIC_API_URL}/img02_183a3ade60.png`,
  };

  return (
    <>
      <Meta meta={meta} />
      <Academy {...props} />
    </>
  );
};

export default LandingPage;
