import {TAB_CLICKED} from '../actions/constants.js';

let rootReducer = (state, action) => {
	switch( action.type ) {

		case TAB_CLICKED:
		  //console.log("Menu item clicked" + action.tab);
			return {
				...state,
				currentTab: action.tab
		};
/*
		case ADD_TO_CART:
			textHistory = "Product is added into shopping cart. Added item was: " + action.productId;
			return {
				...state,
				cartCount: state.cartCount + 1,
				pIdAddedCart: action.productId,
				history: [...state.history, textHistory]
			};*/

		default:
			return state;
	}
}

export default rootReducer;
