import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/userOperations';

export const AddUserForm = ({ closeForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const currentValue = e.target.value;
    switch (e.target.name) {
      case 'name':
        setName(currentValue);
        break;
      case 'email':
        setEmail(currentValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
    };
    dispatch(addUser(newUser));
    closeForm();
  };

  // const handleEditUser = e => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
