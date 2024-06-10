import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export const fetchProducts = async () => {
    const response = await axiosInstance.get('/products');
    return response.data;
  };

  export const createProducts = async(productData: any) =>{
    const respone = await axiosInstance.post('/products', productData);
    return respone.data;
  };