import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const RemoveCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== productToRemove.id;
  });
};

const decrementCartItem = (cartItems, productToDecrement) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDecrement.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== productToDecrement.id;
    });
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrement.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const incrementCartItem = (cartItems, productToIncrement) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productToIncrement.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemInCart: () => {},
  decrementItemInCart: () => {},
  incrementItemInCart: () => {},
  cartCount: 0,
  cartTotal: 0, 
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemInCart = (productToRemove) => {
    setCartItems(RemoveCartItem(cartItems, productToRemove));
  };

  const decrementItemInCart = (productToDecrement) => {
    setCartItems(decrementCartItem(cartItems, productToDecrement));
  };

  const incrementItemInCart = (productToIncrement) => {
    setCartItems(incrementCartItem(cartItems, productToIncrement));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    addItemToCart,
    removeItemInCart,
    decrementItemInCart,
    incrementItemInCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
