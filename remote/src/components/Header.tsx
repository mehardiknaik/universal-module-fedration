import { Link, Outlet } from 'react-router';

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default Header;
