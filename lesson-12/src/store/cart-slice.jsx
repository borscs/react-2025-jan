import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQuantity: 0,
	},
	reducers: {
		addItemToCart: (state, action) => {
			const newItem = action.payload;
			const existingItems = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity += 1;
			
			if(!existingItems) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				});
			}else{
				existingItems.quantity += 1;
				existingItems.totalPrice = existingItems.totalPrice + newItem.price;
			}
		},
		
		removeItemFromCart: (state, action) => {
			const id = action.payload;
			const existingItems = state.items.find((item) => item.id === id);
			state.totalQuantity--;
			
			if(existingItems.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			}else {
				existingItems.quantity -= 1;
			}
		},
		
		replaceCart: (state, action) => {
			state.items = action.payload.items;
			state.totalQuantity = action.payload.totalQuantity;
		}
	},
});

export const cartActions= cartSlice.actions;
export default cartSlice;
