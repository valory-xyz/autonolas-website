import { SITE_URL } from 'util/constants/site';
import {
  getBlogs,
  getEducationArticles,
  getProducts,
} from 'common-util/api';

export const getDynamicPaths = async () => {
  const paths = [];

  // blogs list
  const blogs = await getBlogs();
  const blogsPaths = blogs.map(
    blog => `${SITE_URL}/blog/${blog.attributes.slug}`,
  );
  paths.push(...blogsPaths);

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
