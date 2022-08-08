// import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { NavLinkStyled, Ul, Header } from './Layout.styled';
const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Ul>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/add">Add User</NavLinkStyled>
            </li>
          </Ul>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
