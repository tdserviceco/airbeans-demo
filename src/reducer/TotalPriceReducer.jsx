const TotalPriceReducer = (state = 0, action) => {
  switch (action.type) {
    case 'TOTALPRICE':
      return action.totalPrice
    default:
      return state;
  }
}

export default TotalPriceReducer;