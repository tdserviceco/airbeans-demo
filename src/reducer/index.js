import { combineReducers } from 'redux'
import CartAmount from './CartAmountReducer';
import HeaderDisplay from './HeaderDisplayReducer';
import TotalPrice from './TotalPriceReducer';

const allReducers = combineReducers({
  cartAmount: CartAmount,
  totalPrice: TotalPrice,
  headerDisplay: HeaderDisplay
})

export default allReducers;