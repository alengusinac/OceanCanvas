import { ICartItem } from '@/models/IItem';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

interface ICartContextType {
  cart: ICartItem[];
  totalPrice: number;
  totalAmount: number;
  addToCart: (newCartItem: ICartItem) => void;
  changeAmount: (cartItem: ICartItem, amount: number) => void;
  removeFromCart: (cartItem: ICartItem) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICartContextType>({
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
  addToCart: (newCartItem) => {
    console.log(newCartItem);
  },
  changeAmount: (cartItem, amount) => {
    console.log(cartItem, amount);
  },
  removeFromCart: (cartItem) => {
    console.log(cartItem);
  },
  clearCart: () => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart') || '[]';
    setCart(JSON.parse(cart));
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.amount * item.product.price;
    });
    setTotalPrice(totalPrice);

    setTotalAmount(
      cart.reduce(function (acc, obj) {
        return acc + obj.amount;
      }, 0)
    );
  };

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

  const changeAmount = (cartItem: ICartItem, amount: number) => {
    if (amount === 0) return;
    const itemIndex = cart.findIndex(
      (item) =>
        item.product._id === cartItem.product._id &&
        item.product.size === cartItem.product.size
    );
    const updatedItem = {
      ...cart[itemIndex],
      amount: amount,
    };
    const newCart = [
      ...cart.slice(0, itemIndex),
      updatedItem,
      ...cart.slice(itemIndex + 1),
    ];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (cartItem: ICartItem) => {
    const itemIndex = cart.findIndex(
      (item) =>
        item.product._id === cartItem.product._id &&
        item.product.size === cartItem.product.size
    );
    const newCart = cart.filter((_, index) => index !== itemIndex);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        totalAmount,
        addToCart,
        changeAmount,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
