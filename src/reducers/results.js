const initialState = {
  stories: [],
};

export default function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_STORIES':
      return Object.assign({}, state, { stories: action.stories });
    default:
      return state;
  }
}
