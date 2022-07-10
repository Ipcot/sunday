const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export const MovieGalleryItem = ({
  image,
  id,
  title,
  watched,
  handleWatched,
  handleModal,
  overview,
}) => {
  return (
    <li>
      <img src={IMG_PATH + image} alt={title} />
      <p>{title}</p>
      <p onClick={() => handleWatched(id)}>Watched: {'' + watched}</p>
      <button type="button" onClick={() => handleModal(overview)}>
        Open overview
      </button>
    </li>
  );
};
