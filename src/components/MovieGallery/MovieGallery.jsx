import { MovieGalleryItem } from '../MovieGalleryItem/MovieGalleryItem';

export const MovieGallery = ({ movieList, handleWatched, handleModal }) => {
  return (
    <ul>
      {movieList.map(({ image, id, title, watched, overview }) => {
        return (
          <MovieGalleryItem
            handleWatched={handleWatched}
            key={id}
            id={id}
            image={image}
            title={title}
            watched={watched}
            handleModal={handleModal}
            overview={overview}
          />
        );
      })}
    </ul>
  );
};
