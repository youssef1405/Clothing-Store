// Action Creators
//----------------

export const addItem = (itemToAdd) => {
  return {
    type: 'cart/addItem',
    payload: itemToAdd,
  };
};

export const changeItemQuantity = (name, newQuantity) => {
  return {
    type: 'cart/changeItemQuantity',
    payload: { productName: name, newQuantity },
  };
};

// Cart Initial State
//-------------------
const initialCart = {};

// Cart Slice Reducer
//-------------------
export const cartReducer = (cart = initialCart, action) => {
  switch (action.type) {
    case 'cart/addItem':
      const { name, price } = action.payload;
      const quantity = cart[name] ? cart[name].quantity + 1 : 1;
      const newItem = { price, quantity };

      return {
        ...cart,
        [name]: newItem,
      };

    case 'cart/changeItemQuantity':
      const { productName, newQuantity } = action.payload;
      const itemToUpdate = cart[productName];
      const updatedItem = { ...itemToUpdate, quantity: newQuantity };

      return {
        ...cart,
        [productName]: updatedItem,
      };

    default:
      return cart;
  }
};
