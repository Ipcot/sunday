import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <div>
      <h2>
        Oopss, we didn`t find this page go
        <Link to="/"> to main page</Link>
      </h2>
    </div>
  );
};
