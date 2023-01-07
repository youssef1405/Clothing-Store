import { useEffect } from 'react';
import {
  calculatePrice,
  getCurrencySymbol,
} from '../../utilities/utilities.js';
import { loadData } from './inventorySlice';
import { addItem } from '../cart/cartSlice.js';

const Inventory = ({ inventory, currencyFilter, dispatch }) => {
  const onMount = () => {
    dispatch(loadData());
  };

  useEffect(onMount, [dispatch]);

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  if (!inventory.length)
    return <p>Sorry, no products are currently available... </p>;
  return <ul id='inventory-container'>{inventory.map(createInventoryItem)}</ul>;

  function createInventoryItem(item) {
    const { price, name, img } = item;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={name} className='item'>
        <img src={img} alt='' />
        <h3>{name}</h3>
        <h3 className='price'>
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => handleClick(item)}
          className='add-to-cart-button'
        >
          Add to Cart
        </button>
      </li>
    );
  }
};

export default Inventory;
