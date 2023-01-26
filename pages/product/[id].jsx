import { useRouter } from 'next/router';
import { META_TAGS_INFO, SITE_URL } from 'util/constants/site';
import { getProduct } from 'common-util/functions';
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
    image: META_TAGS_INFO.image,
  };

  return (
    <>
      <Meta meta={meta} />
      <Products product={product} />
    </>
  );
};

export default Product;
