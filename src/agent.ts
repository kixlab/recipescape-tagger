import axios, { AxiosPromise } from 'axios';

// import { Recipe, POS, Tag } from './types';
import { Annotation, Recipe } from './types';
import { BASE_URL } from './constants';

const API_LOGIN = BASE_URL + '/rest-auth';
const API_ROOT = BASE_URL + '/tagger';

export const getRecipe = (id: string): AxiosPromise => {
  return axios.get(API_ROOT + '/recipe/' + id);
};

export const getNewRecipe = (): AxiosPromise => {
  return axios.get(API_ROOT + '/recipe');
};

export const postRecipe = (note: Annotation, token: string) => {
  const headers = {
    'Authorization': `Token ${token}`
  };
  return axios.post(`${API_ROOT}/annotation/${note.origin_id}`, {
      annotator: note.annotator,
      annotation: note.annotations,
    },              {
      headers,
    }
  );
};

export const getToken = (fbToken: string) => {
  return axios.post(`${API_LOGIN}/facebook/`, {
    access_token: fbToken,
  });
};

export function getUserProgress(token: string) {
  const headers = {
    'Authorization': `Token ${token}`
  };
  return axios.get(`${API_ROOT}/user`, { headers });
}

export const defaultRecipe: Recipe = {
  title: 'Loading..',
  origin_id: 'test',
  group_name: 'test',
  instructions: [],
};
