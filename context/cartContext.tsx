'use client'
import { cartContext, cartItem, cartState } from "@/types/Cart";
import { createContext, ReactNode, useContext, useReducer } from "react";

const initialState: cartState = {
  cartItems: [],
  cartTotal: 0,
};

// reducer function

const cartReducer = (state: cartState, action: any): cartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exsistingItem = state.cartItems.find(
        (item) => item.productID === action.payload.productID
      ); //finds if there's an item already in the cart
      let updatedItems;

      if (exsistingItem) {
        updatedItems = state.cartItems.map((item) =>
          item.productID === action.payload.productID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.cartItems, action.payload];
      }
      return {
        cartItems: updatedItems,
        cartTotal: updatedItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    case "REMOVE_FROM_CART":
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        cartItems: filteredItems,
        cartTotal: filteredItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };
    case "INCREASE_QUANTITY":
      const increasedItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        cartItems: increasedItems,
        cartTotal: increasedItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };

    case "DECREASE_QUANTITY":
      const decreasedItems = state.cartItems
        .map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Ensure no items with quantity <= 0 remain
      return {
        cartItems: decreasedItems,
        cartTotal: decreasedItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

// creating context
const CartContext = createContext<cartContext | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
  
    const addToCart = (item: cartItem) => dispatch({ type: 'ADD_TO_CART', payload: item });
    const removeFromCart = (id: string) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    const increaseQuantity = (id: string) => dispatch({ type: 'INCREASE_QUANTITY', payload: id });
    const decreaseQuantity = (id: string) => dispatch({ type: 'DECREASE_QUANTITY', payload: id });
    const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  
    return (
      <CartContext.Provider value={{ state, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}>
        {children}
      </CartContext.Provider>
    );
  };
  

  // creating a hook

  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };
  