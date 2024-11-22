import { Product } from "./Product";

interface cartItem {
    id: string;
    productID: string;
    product: Product;
    quantity: number;
    total: number;
}

interface cartState {
    cartItems: cartItem[];
    cartTotal: number;
}

interface cartContext {

}