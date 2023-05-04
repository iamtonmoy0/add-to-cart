import './ProductCard.css'

export const ProductCard = (product) => {
	
 const{title,price,image} = product.product;

	return (
	<>
	<div className='card'>
		<img src={image} alt="" />    
	<h1 >{title}</h1>
	<p>Price:{price}$</p> 
	<button type='submit' onClick={(id)=>console.log('ok',id)}> Add to cart</button>
	</div>
	</>
	);
}

