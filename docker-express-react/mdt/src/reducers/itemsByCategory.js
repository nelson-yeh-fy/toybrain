export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'CFSLIST_FETCHED': {
      const { category, items } = action.payload;
      return {
        ...state,
        [category]: items,
      };
    }
    default:
      return state;
  }
};
