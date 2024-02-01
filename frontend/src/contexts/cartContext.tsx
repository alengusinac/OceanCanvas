import { ICartItem } from '@/models/IItem';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

interface ICartContextType {
  cart: ICartItem[];
  addToCart: (newCartItem: ICartItem) => void;
  removeFromCart: (cartItem: ICartItem) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICartContextType>({
  cart: [],
  addToCart: (newCartItem) => {
    console.log(newCartItem);
  },
  removeFromCart: (cartItem) => {
    console.log(cartItem);
  },
  clearCart: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem('cart') || '[]';
    setCart(JSON.parse(cart));
  }, []);

  const addToCart = (newCartItem: ICartItem) => {
    if (cart.length === 0) {
      setCart([newCartItem]);
      localStorage.setItem('cart', JSON.stringify([newCartItem]));
      return;
    }

    let newCart: ICartItem[] = [];
    const cartItem = cart.findIndex(
      (item) =>
        item.product._id === newCartItem.product._id &&
        item.product.size === newCartItem.product.size
    );
    if (cartItem !== -1) {
      const updatedItem = {
        ...cart[cartItem],
        amount: cart[cartItem].amount + 1,
      };
      newCart = [
        ...cart.slice(0, cartItem),
        updatedItem,
        ...cart.slice(cartItem + 1),
      ];
    } else {
      newCart = [...cart, newCartItem];
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (cartItem: ICartItem) => {
    const newCart = cart.filter(
      (item) => item.product._id !== cartItem.product._id
    );
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
