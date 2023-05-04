import './ProductCard.css'

export const ProductCard = ({name,price,image}) => {
	return (<> 
	<ul>
		
	<img src="{image.[].jpg}" alt="" />
	<h1>{name}</h1>
	<p>Price:{price}$</p>
	<button type='submit' onClick={()=>console.log('clicked')}> Add to cart</button>
	</ul></>
	);
}

