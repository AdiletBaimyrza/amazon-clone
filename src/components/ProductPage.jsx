import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";
import ProductDetails from "./ProductDetails";
import { GB_CURRENCY } from "../utils/constants";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  });

  if (!product?.title) return <h1>Loading Product...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonClone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto m-auto">
          <div className="grid grid-cols-10 gap-2">
            <div className="col-span-3 bg-white p-8 rounded">
              <img src={`${product.image}`} alt="" />
            </div>
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl xl:text-2xl font-semibold text-right text-red-700">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg font-semibold text-right text-gray-500">
                RRP:{" "}
                <span className="line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base mt-3 font-semibold text-blue-500">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base mt-1 font-semibold text-blue-500">
                FREE Delivery
              </div>
              <div className="text-base xl:text-lg mt-1 font-semibold text-green-700">
                In Stock
              </div>
              <div className="text-base xl:text-lg mt-1">
                Quantity:{" "}
                <select className="p-2 bg-white rounded-md border focus:border-indigo-600">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button className="bg-yellow-400 w-full p-3 mt-3 text-xs xl:text-sm rounded hover:bg-yellow-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
