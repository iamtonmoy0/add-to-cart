import { useEffect } from "react";
import { useState } from "react";
import { ProductCard } from "./ProductCard";




 export const Products = () => {
const [items,setItems]=useState([]);

useEffect(()=>{
	fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> setItems(data))
},[])


	return (
		<div>
			<p>Total Product {items.length}</p>
			{items.map(product => <ProductCard key={product.id} name={product.title} image={product.image} price={product.price} /> )}
		</div>
	);
}


