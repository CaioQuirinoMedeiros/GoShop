import { createStore } from "redux";

import { reducer as cart } from "./ducks/cart";

const store = createStore(cart);

export default store;
