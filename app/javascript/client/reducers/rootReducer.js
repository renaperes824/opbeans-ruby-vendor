import {combineReducers} from 'redux';

import product from './productReducer';
import productCustomers from './productCustomersReducer';
import products from './productsReducer';
import productsTop from './productsTopReducer';
import order from './orderReducer';
import orders from './ordersReducer';
import customer from './customerReducer';
import customers from './customersReducer';
import stats from './statsReducer';

const rootReducer = combineReducers({
  // short hand property names
  product,
  productCustomers,
  products,
  productsTop,
  order,
  orders,
  customer,
  customers,
  stats,
})

export default rootReducer;
