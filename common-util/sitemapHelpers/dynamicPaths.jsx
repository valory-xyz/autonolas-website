import { SITE_URL } from 'util/constants/site';
import {
  getEducationArticles,
  getProducts,
} from 'common-util/api';

export const getDynamicPaths = async () => {
  const paths = [];


  // education list
  const educationPaths = await getEducationArticles();
  const educationArticlesPaths = educationPaths.map(
    article => `${SITE_URL}/education-articles/${article.id}`,
  );
  paths.push(...educationArticlesPaths);

  // products list
  const products = await getProducts();
  const productsPaths = products.map(
    product => `${SITE_URL}/product/${product.id}`,
  );
  paths.push(...productsPaths);

  return paths;
};
