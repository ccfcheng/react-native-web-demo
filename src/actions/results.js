import url from 'url';
import axios from 'axios';
import { API_KEY } from '../constants';
// Standard dispatch action creator
export const saveStories = (stories) => ({
  type: 'SAVE_STORIES',
  stories,
});

// Redux thunk action that returns a function
export const loadStoriesIntoState = () => (dispatch, getState) => {
  const state = getState();
  const section = state.query.section;
  const urlObj = {
    protocol: 'https',
    slashes: true,
    hostname: 'api.nytimes.com',
    pathname: `/svc/topstories/v2/${section}.json`,
    query: {
      'api-key': API_KEY,
    },
  };
  const urlString = url.format(urlObj);
  return axios.get(urlString)
    .then((res) => res.data)
    .then((resData) => {
      const stories = resData.results;
      dispatch(saveStories(stories));
    });
};
