export const categoryIcon = (category) => {

  const movieIcon = `${process.env.PUBLIC_URL}/assets/icons/icon-category-movie.svg`;
  const tvIcon = `${process.env.PUBLIC_URL}/assets/icons/icon-category-tv.svg`;

  if(category === "Movie") {
    return movieIcon;
  }
  else if(category === "TV Series") {
    return tvIcon;
  }
};
