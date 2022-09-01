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

// ----------- TEAM -----------
export const getTeam = async () => {
  const params = {
    sort: ['name:asc'],
    populate: '*',
  };
  const json = await apiCall('team-members', params);
  const cofounders = (get(json, 'data') || []).filter(
    ({ attributes }) => !!attributes.cofounder, // only co-founders
  );

  const foundingTeam = (get(json, 'data') || []).filter(
    ({ attributes }) => !attributes.cofounder, // except co-founders
  );

  return { cofounders, foundingTeam };
};

// ----------- PRESS -----------
export const getPress = async () => {
  const params = {
    sort: ['datePublished:desc'],
    populate: '*',
  };
  const json = await apiCall('media-appearances', params);
  const data = get(json, 'data') || [];
  return data;
};

export const getEachPress = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`media-appearances/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};

// ----------- BLOGS -----------
export const getBlogs = async () => {
  const params = {
    sort: ['datePublished:desc'],
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

// ----------- FUNNELS -----------
export const getFunnel = async id => {
  const params = {
    populate: '*',
  };
  const json = await apiCall(`funnels/${id}`, params);
  const data = get(json, 'data') || null;
  return data;
};
