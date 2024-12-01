
export interface cartItem {
    id: string;
    productID: string;
    price: number;
    quantity: number;
    total: number;
}

export interface cartState {
    cartItems: cartItem[];
    cartTotal: number;
}

export interface cartContext {
    state: cartState;
    addToCart: (item: cartItem) => void;
    removeFromCart: (id: string) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    clearCart: () => void;
}

