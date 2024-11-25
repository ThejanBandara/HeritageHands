"use client";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { FC } from "react";
import { Product } from "@/types/Product";
import { useCart } from "@/context/cartContext";
import { cartItem } from "@/types/Cart";

const ProductCard: FC<Product> = ({
  productID,
  productName,
  productCategory,
  productPrice,
  imageURL,
  isDiscounted,
  discountedPrice,
}) => {
  const calculateDiscount = () => {
    const discountPercentage =
      ((productPrice - discountedPrice) / productPrice) * 100;
    return Math.trunc(discountPercentage);
  };

  const {addToCart} = useCart();

    const handleAddToCart = (id: string, price: number) => {
        const item: cartItem = {
           id: id,
           productID: id,
           price: price,
           quantity: 1,
           total: price
        }

        addToCart(item);
    }

  return (
    <Link
      href={`/Store/products/${productID}`}
      className="border-black border-2 rounded-md p-2 relative flex flex-col bg-white"
    >
      {/* Product Image */}
      <Image
        src={imageURL[0]}
        width={250}
        height={250}
        alt="product Image"
        className="self-center"
      />
      {/* Product Category */}
      <p className="text-sm text-gray-500">{productCategory}</p>
      {/* Product Name */}
      <p className="font-semibold overflow-ellipsis overflow-hidden max-w-[95%] whitespace-nowrap pt-2">
        {productName}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          {/* Discounted price and Precentage */}
          <div className={`items-center ${isDiscounted ? "flex" : "flex"}`}>
            <p
              className={`text-xs text-gray-500 line-through ${isDiscounted ? "block" : " invisible"
                }`}
            >
              <span>Rs.</span>
              {isDiscounted? discountedPrice : productPrice}.00
            </p>
            <Badge
              variant={"default"}
              className={`text-xs scale-75 ${isDiscounted ? "block" : " invisible"
                }`}
            >
              {calculateDiscount()} %
            </Badge>
          </div>

          {/* Original Price */}
          <p className={`font-bold text-lg ${isDiscounted ? "" : " "}`}>
            <span>Rs.</span>10,020.00
          </p>
        </div>

        {/* add to cart Button */}
        <button className=" aspect-square bg-black text-white p-2 rounded-md z-10" onClick={(e) => {e.preventDefault(); handleAddToCart(productID, isDiscounted? discountedPrice : productPrice)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>

      {/* Favourite Button */}
      <button className=" absolute top-0 right-0 mt-2 mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>

      {/* New and top Badges */}
      <div className=" absolute top-0 left-0 mt-2 ml-2 flex flex-row gap-1 scale-90">
        <Badge
          className={` flex-row gap-1 bg-orange-500 text-black  font-medium ${isDiscounted ? 'flex' : 'hidden'}`}
          variant={"default"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <p>Sale</p>
        </Badge>
      </div>
    </Link>
  );
};

export default ProductCard;
