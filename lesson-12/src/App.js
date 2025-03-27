import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {cartActions} from "./store/cart-slice";

let initialValue = true;
function App() {
	
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const cart  = useSelector(state => state.cart);
	
	useEffect(() => {
		fetch('https://react-2022-szept-default-rtdb.europe-west1.firebasedatabase.app/cart.json')
			.then(response => response.json())
			.then(data => {
				
				dispatch(cartActions.replaceCart(data));
			})
	}, []);
	
	useEffect(() => {
		if(initialValue) {
			initialValue = false;
			return;
		}
		
		fetch('https://react-2022-szept-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
			method: 'PUT',
			body: JSON.stringify(cart),
		})
	}, [cart]);
	

	
	return (
		<Layout>
			{showCart && <Cart/>}
			<Products/>
		</Layout>
	);
}

export default App;
