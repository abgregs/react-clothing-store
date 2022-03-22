import { Fragment, useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <div className='logo-container'>
          <NavLink className='logo-link' to='/'>
            <Logo />
          </NavLink>
        </div>
        <div className='nav-links-container'>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <NavLink className='nav-link' to='/auth'>
              Sign In
            </NavLink>
          )}
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
