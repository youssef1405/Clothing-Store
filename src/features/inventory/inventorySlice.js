import { inventoryData } from '../../../data';

// Action Creators

export const loadData = (data) => {
  return {
    type: 'inventory/loadData',
    payload: data,
  };
};

// Invenoty Initial state
const initialInventory = [];

// Inventory Reducer

export const inventoryReducer = (inventory = initialInventory, action) => {
  switch (action.type) {
    case 'inventory/loadData':
      return action.payload;
    default:
      return inventory;
  }
};
