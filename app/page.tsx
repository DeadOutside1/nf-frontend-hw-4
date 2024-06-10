"use client";
import Image from "next/image";
import Header from "./components/Header"
import ProductList from '../app/components/productList';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
        <ProductList/>
		</QueryClientProvider>
    </>
  );
}
