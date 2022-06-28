/* eslint-disable no-console */
import get from 'lodash/get';
import qs from 'qs';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

const apiCall = async (subURL, params) => {
  const stringifyParams = qs.stringify(params);

  try {
    const response = await fetch(`${URL}/${subURL}?${stringifyParams}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.error(error);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  }

  return null;
};

export const getEducationArticles = async () => {
  const params = {
    populate: '*',
  };
  const educationJson = await apiCall('education-articles', params);
  const educationArticles = get(educationJson, 'data') || [];
  return educationArticles;
};

export const getTeam = async () => {
  const params = {
    sort: ['name:asc'],
    populate: '*',
  };
  const json = await apiCall('team-members', params);
  const data = get(json, 'data') || [];
  return data;
};

// ----------- BLOGS -----------
export const getBlogs = async () => {
  const params = {
    sort: ['datePublished:asc'],
    populate: '*',
  };
  const json = await apiCall('blog-posts', params);
  const data = get(json, 'data') || [];
  return data;
};

export const getBlog = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`blog-posts/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};
