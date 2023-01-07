import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../features/cart/cartSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';

const rootReducer = {
  cart: cartReducer,
  inventory: inventoryReducer,
  currencyFilter: currencyFilterReducer,
};
export const store = createStore(combineReducers(rootReducer));
