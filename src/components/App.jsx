import { Button } from './Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/userOperations';
import { getUsers, getLoadingStatus } from 'redux/userSelector';
import { UserList } from './UserList/UserList';
import { useState } from 'react';
import { AddUserForm } from './AddUserForm/AddUserForm';

export const App = () => {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  const userList = useSelector(getUsers);
  const loading = useSelector(getLoadingStatus);

  const handleUsers = () => {
    dispatch(fetchUsers());
  };

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  return (
    <>
      {loading && <p>Loading....</p>}
      {userList.length > 0 ? (
        <>
          <UserList />
          <Button text="Add user" handleClick={handleOpenForm} />
        </>
      ) : (
        <Button text="Fetch User" handleClick={handleUsers} />
      )}

      {openForm && <AddUserForm closeForm={handleClose} />}
    </>
  );
};
