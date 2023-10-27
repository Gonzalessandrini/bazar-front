import { useParams } from "react-router-dom";
import { Nav } from "./Nav";
import './productDetail.css'
import ProductRating from "./Stars";

export function ProductDetail ({ products }) {
    const { id } = useParams();
    const product = products.find(product => product.id == id);

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    const { title, price , thumbnail, images, rating, description, brand } = product;

    return (
        <div className="detail container">
            <Nav />
            <div className="left-col flex">
            <div className="alt-images">
    <ul className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
            <li key={index} className="border rounded overflow-hidden shadow-md">
                <img className="w-full h-auto" src={image} alt={`Alt ${index}`} />
            </li>
        ))}
    </ul>
</div>
                <div className="main-image">
                    <img className="thumbnail" src={thumbnail} alt="Main" />
                </div>
            </div>
            <div className="right-col flex flex-row justify-center items-center">
                <div className="marco flex justify-center">
                    <div className="flex flex-col pt-6">
                        <div>
                            <h1 className="title"><span>{title}</span> - {brand}</h1>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 pt-4">
                            <h1><span>${price}</span></h1>
                            <ProductRating rating={rating} />
                        </div>
                        <div className="pt-8">
                            <p>{description}</p>
                        </div>

                        <div className="pt-10 buy-button">
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Comprar ahora
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
