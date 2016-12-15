const initialState = {
  section: 'national',
};

export default function queryReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECTED_SECTION':
      return Object.assign({}, state, { section: action.section });
    default:
      return state;
  }
}
