import { useState, useEffect, useRef, useCallback } from 'react';
import productService from '../services/items'

export function useProducts ({search}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch= useRef(search)

  const getProducts= useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    // search es ''

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newProducts = await productService.getProducts({ search })
      console.log(newProducts)
      setProducts(newProducts)
    } catch (e) {
      setError(e.message)
    } finally {

      setLoading(false)
    }
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products]);

  return { products, loading, error, getProducts };
}
