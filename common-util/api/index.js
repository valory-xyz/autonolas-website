/* eslint-disable no-console */
import qs from 'qs';
import get from 'lodash/get';
import products from '../data/products.json';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const apiCall = async (subURL, params) => {
  const stringifyParams = qs.stringify(params);

  try {
    const response = await fetch(`${URL}/${subURL}${params ? '?' : ''}${stringifyParams}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.error(error);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  }

  return null;
};

// ----------- EDUCATION ARTICLES -----------
export const getEducationArticles = async () => {
  const params = {
    populate: '*',
  };
  const json = await apiCall('education-articles', params);
  const data = get(json, 'data') || [];
  return data;
};

export const getEducationArticle = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`education-articles/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};

// ----------- IDEAS -----------
export const getIdeas = async () => {
  const params = {
    populate: '*',
  };
  const json = await apiCall('ideas', params);
  const data = get(json, 'data') || [];
  return data;
};

export const getIdea = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`ideas/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};

// ----------- PRODUCTS -----------
export const getProducts = async () => products;

export const getProduct = id => {
  const product = products.find(p => p.id === id);
  if (!product) { throw new Error(`Product with id ${id} not found`); }
  return { ...product };
};

// ----------- FUNNELS -----------
export const getFunnel = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`funnels/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};
