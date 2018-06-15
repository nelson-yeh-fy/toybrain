
export default (state = false, action = {}) => {
  switch (action.type) {
    case 'LIST':
      return true;
    case 'CFSLIST_FETCHED':
      return false;
    default:
      return state;
  }
};
