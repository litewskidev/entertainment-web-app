import { strContains } from '../utils/strContains';

//  SELECTORS
export const getList = ({ list, searchString }) => list.filter(card => strContains(card.title, searchString));
export const getMovies = ({ list, searchString }) => list.filter(card => card.category === "Movie" && strContains(card.title, searchString));
export const getTv = ({ list, searchString }) => list.filter(card => card.category === "TV Series" && strContains(card.title, searchString));
export const getBookmarkedMovies = ({ list, searchString }) => list.filter(card => card.category === "Movie" && card.isBookmarked === true && strContains(card.title, searchString));
export const getBookmarkedTvSeries = ({ list, searchString }) => list.filter(card => card.category === "TV Series" && card.isBookmarked === true && strContains(card.title, searchString));
export const getTrending = ({ list, searchString }) => list.filter(card => card.isTrending === true && strContains(card.title, searchString));
export const getBookmarked = ({list, searchString}) => list.filter(card => card.isBookmarked === true && strContains(card.title, searchString));

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
