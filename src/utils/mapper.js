// const { getByTitle } = require('@testing-library/react');

export const mapper = movies => {
  return movies.map(({ backdrop_path, title, overview, id }) => {
    return { id, image: backdrop_path, overview, title, watched: false };
  });
};

// backdrop_path
// title
// overviews
// id
