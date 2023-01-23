import { useRouter } from 'next/router';
import { SITE_URL } from 'util/constants/site';
import { getProduct, getHostName } from 'common-util/functions';
import Meta from 'common-util/meta';
import Products from 'components/Products';
import allProducts from 'components/Products/products.json';


const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = getProduct(allProducts, id);

  const meta = {
    siteUrl: `${SITE_URL}/product/${id}`,
    title: product.title,
    description: product.description,
    image: `${getHostName()}/images/products/screens/${product.id}.jpg`,
  };

  return (
    <>
      <Meta meta={meta} />
      <Products product={product} />
    </>
  );
};

export default Product;
