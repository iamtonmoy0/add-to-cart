const addToCart=(id)=>{

	let shoppingCart={};
	const storedCart=localStorage.getItem('cart')
	if(storedCart){
		shoppingCart=JSON.parse(storedCart)
	}else{
		shoppingCart={};
	}


	const quantity=shoppingCart[id]
	if(quantity){
		const newQuantity=quantity+1;
		shoppingCart[id]=newQuantity;
	}else{
shoppingCart[id]=1;
	}
	localStorage.setItem('cart',JSON.stringify(shoppingCart))
	
 }
//  removing section
  const removeDb=(id)=>{
	const storedCart=localStorage.getItem('cart')
	if(storedCart){
		const shoppingCart=JSON.parse(storedCart)
		if(id in shoppingCart){
delete shoppingCart[id];
localStorage.setItem('cart',JSON.stringify(shoppingCart))
		}
	}
	
  }
  //clear full cart
  const delCart=()=>{
	localStorage.removeItem('cart')
  }
 export {addToCart,removeDb,delCart};
 //important storing data to local storage