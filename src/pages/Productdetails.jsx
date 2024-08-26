import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const Productdetails = () => {
  const { productId } = useParams();
  const { products } = useProductStore();
  const { carts, addCart } = useCartStore();

  // Find the current product
  const currentProduct = products.find((product) => product.id === parseInt(productId));
  
  // Check if the product is in the cart
  const isInCart = carts.some((cart) => cart.productId === currentProduct.id);

  // Handle add to cart action
  const handleAddToCart = () => {
    if (isInCart) {
      toast.error("Item is already added in My Cart");
      return;
    }
    addCart({
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    });
    toast.success("Item added to cart");
  };

  return (
    <Container className="px-5">
      <BreadCrumb currentPageTitle="Product Detail" />
      <div className="border border-black p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              className="h-[200px] md:h-auto md:w-3/4 block mb-5 md:mb-0 md:mx-auto"
              alt={currentProduct.title}
            />
          </div>
          <div className="col-span-1 flex flex-col items-start gap-5">
            <h3 className="text-3xl font-bold">{currentProduct.title}</h3>
            <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between w-full items-center">
              <p>Price : {currentProduct.price}</p>
              <button
                onClick={handleAddToCart}
                className={`text-sm border px-3 py-1 ${isInCart ? "bg-black text-white" : "border-black"}`}
              >
                {isInCart ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Productdetails;
