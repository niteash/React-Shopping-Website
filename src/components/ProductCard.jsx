import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";



const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug
  },


}) => {
  const {carts, addCart} = useCartStore();
  const  navigate  = useNavigate();

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already added in My Cart")
  }

  const handleAddtoCart = (event) => {
    event.stopPropagation();
     const newCart = {
      
      id: Date.now(), 
      productId : id,
      quantity:1,

    };

    addCart(newCart);
  }

  const handleOpenDetails = () => {
    navigate(`product-details/${slug}`);
  }

  return (
    <div
    onClick={handleOpenDetails}
     
      className="border border-black p-5 flex flex-col items-start gap-5"
    >
      <img src={image} className="h-40" alt="" srcset="" />
      <p className="font-bold line-clamp-2">{title}</p>

      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end ">
        <p>{price}</p>

        {carts.find((cart) => cart.productId === id) ? (
          <button onClick={handleAddedBtn} className="border px-4 py-1 border-black bg-black text-white text-sm">
            Added
          </button>
        ) : (
          <button onClick = {handleAddtoCart} className="border px-4 py-1 border-black text-sm">
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
