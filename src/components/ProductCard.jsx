import './ProductCard.css'
import { addToCart,removeDb } from './utilities/addToCart';

export const ProductCard = (product) => {
	
 const{title,price,image,id} = product.product;
 const removeCart=(id)=>{
	removeDb(id)
 }
 
	return (
	<>
	<div className='card'>
		<img src={image} alt="" />    
	<h1 >{title}</h1>
	<p>Price:{price}$</p> 
	<button type='submit' onClick={()=>addToCart(id)}> Add to cart</button>
	<button onClick={()=>removeCart(id)}>Remove Cart</button>
	</div>
	</>
	);
}

