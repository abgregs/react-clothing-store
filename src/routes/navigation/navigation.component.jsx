import { Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <div className='logo-container'>
          <NavLink className='logo-link' to='/'>
            <Logo />
          </NavLink>
        </div>
        <div className='nav-links-container'>
          <NavLink className='nav-link' to='/sign-in'>
            Sign In
          </NavLink>
          <NavLink className='nav-link' to='/shop'>
            Shop
          </NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
