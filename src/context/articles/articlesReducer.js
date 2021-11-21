const articlesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
    default:
      return state;
  }
};

export default articlesReducer;
