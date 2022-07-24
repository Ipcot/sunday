import { fetchEvents } from 'services/eventsApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import { Outlet, useLocation } from 'react-router-dom';

export const EventView = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <Box as="ul" p={4} m={5}>
      {events.length > 0 &&
        events.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location.pathname }}>
                {name}
              </Link>
            </li>
          );
        })}
      <Outlet />
    </Box>
  );
};
