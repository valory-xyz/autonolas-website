import { useRouter } from 'next/router';
// import get from 'lodash/get';
import PropTypes from 'prop-types';
import { SITE_URL } from 'util/constants/site';
import Hero from 'common-util/FunnelLandingPage/Hero';
import Meta from 'common-util/meta';
// import Description from 'common-util/Description';
// import Header from 'common-util/Header';
// import CallToActionButton from 'common-util/Products/Hero/CallToActionButton';
// import { HeroSection, DescActionButtons } from 'common-util/Products/Hero/styles';
import { getHostName } from 'common-util/functions';

const Products = ({ details }) => {
  const router = useRouter();
  const { pathname } = router;
  const {
    icon,
    image,
    name,
    description,
    primaryBtnText,
    primaryLink,
    runTheCodeLink,
    buildYourOwnLink,
  } = details || {};

  return (
    <>
      <Meta
        meta={{
          siteUrl: `${SITE_URL}${pathname}`,
          title: name,
          description,
          image: `${getHostName()}/images/Products/metadata/${image}`,
        }}
      />
      <Hero
        title={name}
        subtitle={description}
        href={primaryLink}
        btnText={primaryBtnText}
        imgUrl={`/images/Products/${image}`}
      />

      <br />
      <p>{icon}</p>
      <p>{runTheCodeLink}</p>
      <p>{buildYourOwnLink}</p>

      {/*  <HeroSection
        className="section section-1"
        id="banner"
        // isNavigationOpen={isNavigationOpen}
        // style={getStyle(imgUrl)}
      >
        <Header className="header" title={title} />

        <DescActionButtons>
          <Description type={2} title={subtitle || ''} />

          <div className="action-btn">
            <CallToActionButton href={href} btnText={btnText} />
          </div>
        </DescActionButtons>
      </HeroSection> */}
    </>
  );
};

Products.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
};

export default Products;
