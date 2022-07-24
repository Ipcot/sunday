import styled from '';
import { NavLink } from 'react-router-dom';
export const NavItem = styled(NavLink)`
  cursor: pointer;
  width: 250px;
  color: green;
  border: 2px solid #212121;
  border-radius: 4px;

  &.active {
    background-color: blue;
  }

  :hover {
  }
`;
