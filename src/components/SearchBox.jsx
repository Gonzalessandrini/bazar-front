import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useSearch } from "../hooks/useSearch";


export function SearchBox() {


  const { search, updateSearch } = useSearch()
  const { products, getProducts } = useProducts({search})
  const navigate = useNavigate()
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    getProducts({search})
     navigate('/products');
  };

  useEffect(() => {
    console.log(products)
  }, [products]);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <ion-icon name="cart-outline" style={{"fontSize":100}} className=" text-blue-500 mb-4"></ion-icon>
        <h1 className="text-6xl font-serif">BAZAR ONLINE</h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-lg">
        <section className="flex items-center border border-gray-900 rounded-full">
          <input
            type="text"
            id="large-input"
            value={search}
            placeholder="Laptops, fragancias, smartphones..."
            onChange={(e) => { updateSearch(e.target.value) }}
            className="w-full px-6 py-4 bg-gray-900 text-gray-100 rounded-full focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover.bg-blue-600 text-white font-semibold rounded-full px-6 py-4"
          >
            Buscar
          </button>
        </section>
      </form>
      <button onClick={()=> console.log(useProducts)}>asd</button>
    </div>
  );
}
