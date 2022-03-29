import { Fragment, useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';

import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

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
            <NavLink className='nav-link' to='auth'>
              Sign In
            </NavLink>
          )}
          <NavLink className='nav-link' to='shop'>
            Shop
          </NavLink>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
