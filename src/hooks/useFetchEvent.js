import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from 'services/eventsApi';

export const useFetchEvent = () => {
  const [event, setEvent] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
    fetchById(eventId).then(setEvent);
  }, [eventId]);

  return event;
};
