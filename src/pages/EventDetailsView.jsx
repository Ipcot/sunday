import { useFetchEvent } from 'hooks/useFetchEvent';
import { useLocation, useNavigate } from 'react-router-dom';

export const EventDetailsView = () => {
  const event = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(event);
  return (
    <>
      <button
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/event/')}
      >
        Go Back
      </button>
      {event && (
        <>
          <h1>{event.name}</h1>
          <img src={event.images[1].url} alt="event" width="250" hight="250" />
          <p>{event.classifications[0].genre.name}</p>
          <p>{event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};
