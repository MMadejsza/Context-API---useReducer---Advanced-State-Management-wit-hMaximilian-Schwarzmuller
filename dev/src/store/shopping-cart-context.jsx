import {createContext} from 'react';

// may be any type od data passed into
export const CartContext = createContext({
	items: [],
	// for help in autocompletion
	addItemToCart: () => {},
	updateItemQuantity: () => {},
});
