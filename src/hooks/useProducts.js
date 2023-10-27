import { useState, useEffect} from 'react';
import productService from '../services/items'

export function useProducts () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const getProducts= async ({ search }) => {

    try {
      setLoading(true)
      setError(null)

      const newProducts = await productService.getProducts({ search })
      console.log(newProducts)
      setProducts(newProducts)
    } catch (e) {
      setError(e.message)
    } finally {

      setLoading(false)
    }
  }

  useEffect(() => {
    console.log(products)
  }, [products]);

  return { products, loading, error, getProducts };
}
