"use client";
import React from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../services/productsService";

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useQuery(["products"], fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-[20px]">
      {data.map((product: any) => (
        <div key={product.id} className="border flex flex-col items-center">
          <div className="p-[20px]">
            <img
              src={product.image}
              alt={product.title}
              className="w-[auto] h-48 "
            />
          </div>
          <div className="w-full h-full text-center bg-gray-500 p-[20px] flex flex-col items-center">
            <h2 className="text-lg font-bold text-white mb-[10px] w-[70%] text-center">
              {product.title}
            </h2>
            <p className="font-regular text-white">{product.price} $</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
