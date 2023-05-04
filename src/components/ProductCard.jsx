import './ProductCard.css'

export const ProductCard = (props) => {
	const{title,price}=props.product;
	return (<>
	<ul>
		<img src="" alt="" />
	<h1>{title}</h1>
	<p>Price:{price}$</p>
	<button type='submit' onClick={()=>console.log('ok')}> Add to cart</button>
	</ul></>
	);
}

