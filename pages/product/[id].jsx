import { getProduct } from 'common-util/functions';
import Products from 'components/Products';
import allProducts from 'components/Products/products.json';
import { useRouter } from 'next/router';


const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = getProduct(allProducts, id);

  return <Products product={product} />;
};

export default Product;
