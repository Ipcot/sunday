import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  );
};
