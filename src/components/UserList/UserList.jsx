import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUsers } from 'redux/userSelector';
import { deleteUser } from 'redux/userOperations';

export const UserList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteUser(id));
  };

  // const handleEdit = () => {};

  return (
    <ul>
      {users.map(({ id, name, email }) => {
        return (
          <>
            {name && (
              <li key={id}>
                <p>User name: {name}</p>
                <p>User email: {email}</p>
                <button type="button">Edit</button>
                <button type="button" onClick={() => handleDelete(id)}>
                  Delete
                </button>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};
