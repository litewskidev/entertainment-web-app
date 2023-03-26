export const getList = (state) => state.list;

const createActionName = actionName => `app/${actionName}`;
const UPDATE_LIST = createActionName('UPDATE_LIST');

export const updateList = payload => ({ type: UPDATE_LIST, payload });

const listReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return [...action.payload];
    default:
      return statePart;
  };
};

export default listReducer;
