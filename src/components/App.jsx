import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomeView } from 'pages/HomeView';
import { EventView } from 'pages/EventView';
import { EventSubView } from 'components/EventSubView/EventSubView';
import { EventDetailsView } from 'pages/EventDetailsView';
import { NotFoundView } from 'pages/NotFoundView/NotFoundView';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="event" element={<EventView />}>
            <Route path=":eventId" element={<EventSubView />} />
          </Route>
          <Route path="event/:eventId/details" element={<EventDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
