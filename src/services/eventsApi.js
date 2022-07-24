import axios from 'axios';

const AUTH_KEY = '4KV9Chpg2H2cGNoEZkUT6nJwkLvlEuMx';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export async function fetchEvents() {
  const results = await axios.get(`events?size=20&apikey=${AUTH_KEY}`);
  return results.data._embedded.events;
}

export async function fetchById(id) {
  const results = await axios.get(`events/${id}?apikey=${AUTH_KEY}`);
  return results.data;
}
