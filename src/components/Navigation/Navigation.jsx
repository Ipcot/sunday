import { NavLink, useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import styled from 'styled-components';
// import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes('details') && (
        <Box as="nav">
          <Box as="ul" display="flex" p={5}>
            <li>
              <NavItem to="/">Main </NavItem>
            </li>
            <li>
              <NavItem to="/event">Events </NavItem>
            </li>
          </Box>
        </Box>
      )}
    </>
  );
};

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
