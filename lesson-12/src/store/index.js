import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";


const sotre = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		cart: cartSlice.reducer,
	}
});

export default sotre;
