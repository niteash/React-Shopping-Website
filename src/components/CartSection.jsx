import React from "react";
import products from "../data/products";
import { Container } from "./Container";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import emptyCartImg from "/assests/empty-cart.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find(({ id }) => id === cv.productId).price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <>



      <div className="flex flex-col gap-5 flex-grow h-full">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}
      </div>
      
      {carts.length === 0 && (
        <img
          src={emptyCartImg}
          alt="empty"
          className="w-[200px] block mx-auto mt-10 "
          srcset=""
        />
      )}
   

      <div className=" left-0 w-full bg-white">
        <Container className="px-5">
          <div className="border-t border-black flex justify-end gap-10 py-3">
            <div className="text-right">
              <p className="text-gray-500">Total ($)</p>
              <p className="font-bold">{total.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500">Tax (10%)</p>
              <p className="  font-bold">{tax.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500">Net Total ($)</p>
              <p className="text-2xl font-bold">{netTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-end mb-5 ">
            <Link className="border border-black px-4 py-3 ">Order Now</Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CartSection;
