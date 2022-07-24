import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

export const EventSubView = () => {
  const event = useFetchEvent();
  const location = useLocation();
  return (
    <>
      {!event && <h2>Loading ...</h2>}
      {event && (
        <div>
          <h2>{event.name}</h2>
          {/* <img src={event.images[0].url} alt="event" width="250" hight="250" /> */}
          <Link to="details" state={location.state}>
            More details
          </Link>
        </div>
      )}
    </>
  );
};
