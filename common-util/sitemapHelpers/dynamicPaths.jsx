import glob from 'glob';
// import { chain } from 'lodash';
import { SITE_URL } from 'util/constants/site';
import {
  getBlogs,
  getEducationArticles,
  // getIdeas,
  // getPress,
  getProducts,
} from 'common-util/api';

const checkIfPathExists = async generatedDynamicPaths => {
  const pagesDir = 'pages/**/*.jsx';
  const pagesPaths = await glob.sync(pagesDir);

  const filteredPaths = pagesPaths.filter(
    path => path.includes('/[') && !path.includes('/_'),
  );

  /**
   * getOnlyNames is an array of all the paths in the pages directory
   * eg: ['/blog', '/education-articles', '/ideas', '/press', '/product'].
   */
  const getOnlyNames = filteredPaths.map(path => path.replace('pages', '').replace('/[id].jsx', ''));

  // filter press and ideas as they are not present in the generatedDynamicPaths
  const filteredPathsNames = getOnlyNames.filter(
    path => path !== '/ideas' && path !== '/press',
  );

  // const filteredPathsNames = getOnlyNames.filter(

  // generatedDynamicPaths

  console.log(filteredPathsNames);


  // console.warning(
  //   'Some of the dynamic paths are missing, please add the appropriate APIs',
  // );
};

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
  // TODO: Oak, there is nothing in the ideas page.
  // Bit misleading, please suggest what to do here.
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

  // check if all the paths are present
  await checkIfPathExists(paths);

  return paths;
};
