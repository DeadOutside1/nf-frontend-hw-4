import "../../app/globals.css";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createProducts } from "../../app/services/productsService";
import Header from "../../app/components/Header"

const CreateProduct: React.FC = () => {
  const queryClient = useQueryClient();
  const [imageUrls, setImageUrls] = useState<string>("");
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const mutation = useMutation(createProducts, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file); // Ensure this key matches the API requirement

      try {
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=0f3ce47c6061281c1ec14fe65f2fec93",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        console.log(data); // Log the response to check its structure

        if (data && data.data && data.data.url) {
          setProductData((prevData) => ({
            ...prevData,
            image: data.data.url,
          }));
        } else {
          console.error("Unexpected response structure:", data);
        }
        setImageUrls(data.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(productData);
  };

  return (
  <div>
    <Header/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Product
        </button>
      </form>
      {imageUrls && `Image url is ` + imageUrls}
    </div>
  </div>
  );
};

export default CreateProduct;
