import { configureStore, combineReducers } from 'redux';
import { cartReducer } from '../features/cart/cartSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';

const reducers = {
  cart: cartReducer,
  inventory: inventoryReducer,
  currencyFilter: currencyFilterReducer,
};
export const store = configureStore(combineReducers(reducers));
