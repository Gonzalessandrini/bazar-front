import { Link } from 'react-router-dom'

import { Nav } from './Nav'
import './products.css'

export function Products(){

    const  products  = []

    return (

    <>

        <Nav/>
    
        <main className='products'>

            <ul>
                {products.map(product=>(

                <li  key={product.id}>
                    

                <Link to={`/products/${product.id}`} className='link'>
                    <div >
                        <img 
                        src={product.thumbnail}
                        alt={product.title}/>


                       <h3> <strong>{product.title}</strong></h3>

                       
                         <p>{product.description}</p>
                         <p> <strong>{product.price}$</strong></p>
                    </div>

                </Link>

                </li>
                
                ))}
                
            </ul>
        </main>
    </>
        
    )
    
}
