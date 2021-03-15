export const cartAmount = (amount) => {
  return {
    type: 'CARTAMOUNT',
    amount: amount
  }
}

export const headerDisplay = (boolean) => {
  return {
    type: 'DISPLAYMENU',
    display: boolean
  }
}

export const totalPrice = (totalPrice) => {
  return {
    type: 'TOTALPRICE',
    totalPrice: totalPrice
  }
}

