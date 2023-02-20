import { SITE_URL } from 'util/constants/site';
import {
  getBlogs,
  getEducationArticles,
  // getIdeas,
  // getPress,
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

  // ideas list
  // TODO: There is nothing in the ideas page, confused.
  // const ideasPaths = await getIdeas();
  // const ideasArticlesPaths = ideasPaths.map(
  //   idea => `${SITE_URL}/ideas/${idea.id}`,
  // );
  // paths.push(...ideasArticlesPaths);

  // press list
  // TODO: we don't have a each press page.
  // const pressPaths = await getPress();
  // const pressArticlesPaths = pressPaths.map(
  //   press => `${SITE_URL}/press/${press.id}`,
  // );
  // paths.push(...pressArticlesPaths);

  // products list
  const products = await getProducts();
  const productsPaths = products.map(
    product => `${SITE_URL}/product/${product.id}`,
  );
  paths.push(...productsPaths);

  return paths;
};
