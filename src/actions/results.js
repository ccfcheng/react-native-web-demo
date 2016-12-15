import url from 'url';
import axios from 'axios';
import * as Constants from '../constants';
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
    hostname: Constants.HOSTNAME,
    pathname: `${Constants.PATH}${section}.json`,
    query: {
      'api-key': Constants.API_KEY,
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
