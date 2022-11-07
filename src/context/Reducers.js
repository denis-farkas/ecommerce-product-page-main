export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(
          (c) => c.shopCart.id !== action.payload.shopCart.id
        ),
      };
    default:
      return state;
  }
};

export const indexReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_INDEX': {
      return { index: state.index + 1 };
    }
    case 'DECREMENT_INDEX': {
      return { index: state.index - 1 };
    }
    case 'DEFINE_INDEX': {
      return {
        index: action.payload,
      };
    }
    default:
      return state;
  }
};
