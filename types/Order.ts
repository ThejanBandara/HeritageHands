import { cartItem } from "./Cart";

export interface DeliveryInfo{
    fullName: string,
    phoneOne: string,
    phoneTwo: string,
    email: string,
    addressOne: string,
    addressTwo: string,
    city: string,
    state: string,
    postalCode: string
}

export interface Order{
    orderID: string,
    userID: string,
    date: Date,
    amount: number,
    status: string,
    orderItems:cartItem[],
    deliveryinfo: DeliveryInfo
}

