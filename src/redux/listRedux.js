import { strContains } from '../utils/strContains';

//  SELECTORS
export const getList = ({ list }) => list;
export const getMovies = ({ list }) => list.filter(card => card.category === "Movie");
export const getTv = ({ list }) => list.filter(card => card.category === "TV Series");
export const getBookmarkedMovies = ({ list }) => list.filter(card => card.category === "Movie" && card.isBookmarked === true);
export const getBookmarkedTvSeries = ({ list }) => list.filter(card => card.category === "TV Series" && card.isBookmarked === true);
export const getTrending = ({ list }) => list.filter(card => card.isTrending === true);
export const getFilteredList = ({ list, searchString }) => list.filter(card => strContains(card.title, searchString));

//  ACTIONS
const createActionName = actionName => `app/list/${actionName}`;
const TOGGLE_BOOKMARK = createActionName('TOGGLE_BOOKMARK');

//  ACTIONS CREATORS
export const toggleBookmark = payload => ({ type: TOGGLE_BOOKMARK, payload });

const listReducer = (statePart = [], action) => {
  switch (action.type) {
    case TOGGLE_BOOKMARK:
      return statePart.map(card => (card.id === action.payload) ? {...card, isBookmarked: !card.isBookmarked}: card);
    default:
      return statePart;
  };
};

export default listReducer;
