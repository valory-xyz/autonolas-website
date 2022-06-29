import Press from 'components/Press';
import { getPress } from 'common-util/api';
import { serverRedirectToError } from 'common-util/functions';

export async function getServerSideProps() {
  const press = await getPress();

  if (!press) {
    return serverRedirectToError();
  }

  return {
    props: {
      press,
    },
  };
}

export default Press;
