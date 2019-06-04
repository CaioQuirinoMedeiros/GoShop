import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Actions Types & Creators
 */

const { Types, Creators } = createActions({
  addToCart: ["product"],
  removeToCart: ["id"],
  updateProductQuantity: ["id", "quantity"]
});

export const CartTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  products: [],
  subTotal: 100
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_CART]: (state, { product }) => ({
    ...state,
    products: [...state.products, { ...product, quantity: 1 }]
  }),
  [Types.REMOVE_TO_CART]: (state, { id }) => ({
    ...state,
    products: state.products.filter(product => product.id !== id)
  }),
  [Types.UPDATE_PRODUCT_QUANTITY]: (state, { id, quantity }) => {
    const products = state.products.map(product => {
      if (product.id === id) product.quantity = quantity;

      return product;
    });

    return { ...state, products };
  }
});
