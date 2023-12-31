import { useState, useEffect } from "react";
import productService from '../services/items'

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async (search) => {
    try {
      setLoading(true);
      setError(null);

      const newProducts = await productService.getProducts(search)
      console.log(newProducts)
      setLoading(false);

      return newProducts
      
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  
  

  return { products, loading, error, getProducts };
}
