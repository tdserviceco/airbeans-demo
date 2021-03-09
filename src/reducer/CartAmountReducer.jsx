
const CartAmountReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CARTAMOUNT':
      return Number(action.amount)
    default:
      return state;
  }
}

export default CartAmountReducer;