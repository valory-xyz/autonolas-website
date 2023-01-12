import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { SITE_URL } from 'util/constants/site';
import Button from 'common-util/Button';
import Meta from 'common-util/meta';
import Header from 'common-util/Header';
import CallToActionButton from 'common-util/FunnelLandingPage/Hero/CallToActionButton';
import { getHostName, openUrl } from 'common-util/functions';
import { ProductContainer } from './styles';

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
    buildYourOwnLink: P,
  } = details || {};

  return (
    <>
      <Meta
        meta={{
          siteUrl: `${SITE_URL}${pathname}`,
          title: name,
          description,
          image: `${getHostName()}/images/Products/${image}`,
        }}
      />

      <ProductContainer>
        <div
          className="each-content-header-image"
          style={{
            backgroundImage: `url(/images/Products/${image})`,
          }}
        />

        <div className="each-content-body">
          <Header className="header" title={name} />

          <div className="each-content-details">
            <div className="each-content-details-1">
              <div className="subtitle">{description}</div>

              <div className="body">

                <img
                  src={`/images/9Products/${icon}`}
                  alt=" "
                  width="200px"
                  height="200px"
                />
                <br />

                <P />
              </div>

              <div className="action-btn">
                <CallToActionButton href={primaryLink} btnText={primaryBtnText} />
                <br />
                <Button type="black" className="mini" onClick={() => openUrl(runTheCodeLink)} title="Run the code" />
              </div>
            </div>
          </div>
        </div>
      </ProductContainer>
    </>
  );
};

Products.propTypes = {
  details: PropTypes.instanceOf(Object).isRequired,
};

export default Products;
