import { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { GiBilledCap } from 'react-icons/gi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<Boolean>(false);

  const signOutUser = () => {
    dispatch(signOutStart());
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  }
 
  return (
    <div className='container'>
      <nav className='mx-auto'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800'
            >
              <span className='sr-only'>Open main menu</span>
              {!isMobileMenuOpen ? (
                <AiOutlineMenu className='block h-5 w-5' aria-hidden='true' />
              ) : (
                <AiOutlineClose className='block h-5 w-5' aria-hidden='true' />
              )}
            </button>
          </div>

          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <Link to='/'>
                <GiBilledCap className='block text-indigo-600 h-8 w-auto' />
              </Link>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <NavLink
                  className={({ isActive }) =>
                    'nav-link px-3 py-2 rounded-md text-md font-medium font-inter-bold' +
                    (isActive
                      ? ' text-indigo-600'
                      : ' text-gray-800 hover:text-indigo-600')
                  }
                  to='shop'
                >
                  Shop
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    'nav-link px-3 py-2 rounded-md text-md font-medium font-inter-bold' +
                    (isActive
                      ? ' text-indigo-600'
                      : ' text-gray-800 hover:text-indigo-600')
                  }
                  to='checkout'
                >
                  Checkout
                </NavLink>
              </div>
            </div>
          </div>
          {currentUser ? (
                  <span
                    className='hidden sm:block nav-link px-3 py-2 rounded-md text-base font-inter-bold cursor-pointer font-medium text-gray-800 hover:text-indigo-600'
                    onClick={signOutUser}
                  >
                    Sign Out
                  </span>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      'hidden sm:block nav-link px-3 py-2 rounded-md text-base font-medium font-inter-bold' +
                      (isActive
                        ? ' text-indigo-600'
                        : ' text-gray-800 hover:text-indigo-600')
                    }
                    to='auth'
                  >
                    Sign In
                  </NavLink>
                )}
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button type='button' className='text-gray-800'>
              <span className='sr-only'>View Cart</span>
              <CartIcon />
            </button>
            {isCartOpen && <CartDropdown />}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <nav className='sm:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <div className='flex nav-link-container'>
              {currentUser ? (
                <span
                  className='nav-link block px-3 py-2 rounded-md text-base font-inter-bold cursor-pointer font-medium text-gray-800 hover:text-indigo-600'
                  onClick={signOutUser}
                >
                  Sign Out
                </span>
              ) : (
                <NavLink
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    'nav-link block px-3 py-2 rounded-md text-base font-medium font-inter-bold' +
                    (isActive
                      ? ' text-indigo-600'
                      : ' text-gray-800 hover:text-indigo-600')
                  }
                  to='auth'
                >
                  Sign In
                </NavLink>
              )}
            </div>
            <div className='flex nav-link-container'>
            <NavLink
              onClick={handleNavClick}
              className={({ isActive }) =>
                'nav-link block px-3 py-2 rounded-md text-base font-medium font-inter-bold' +
                (isActive
                  ? ' text-indigo-600'
                  : ' text-gray-800 hover:text-indigo-600')
              }
              to='shop'
            >
              Shop
            </NavLink>
            </div>
            <div className='flex nav-link-container'>
            <NavLink
                  className={({ isActive }) =>
                    'nav-link px-3 py-2 rounded-md text-md font-medium font-inter-bold' +
                    (isActive
                      ? ' text-indigo-600'
                      : ' text-gray-800 hover:text-indigo-600')
                  }
                  to='checkout'
                >
                  Checkout
                </NavLink>
            </div>
          </div>
        </nav>
      )}
      <div className='content-container my-8'>
        <Outlet />
      </div>

    </div>
  );
};

export default Navigation;
