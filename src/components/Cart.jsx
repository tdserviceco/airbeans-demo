import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LayoutOfCart from '../components/LayoutOfCart';
import { totalPrice, headerDisplay } from '../actions';
function Cart(props) {
  const dispatch = useDispatch();
  // const displayCart = useSelector(state => state.displayCart);
  dispatch(totalPrice(localStorage.getItem('totalPrice')))
  const totalPriceReducer = useSelector(state => state.totalPrice);
  const cart = useSelector(state => state.cartAmount);
  const
    [orderAmount, updateOrderAmount] = useState(0),
    [totalPriceOfOrder, updateTotalPriceOfOrder] = useState(0),
    [displayCart, updateDisplayCart] = useState(false);

  // OM korgen inte är tomt uppdatera dem innan man kommer till varukorgen component "sidan"
  useEffect(() => {
    if (localStorage.getItem('order') === null) {
      updateOrderAmount(0)
    }
    else if (cart === 0) {
      updateOrderAmount(0)
    }
    else if (cart !== 0) {
      updateOrderAmount(cart)
    }
  }, [cart]);

  // Extra kollar om alla scenario är okay..
  useEffect(() => {
    if (totalPriceReducer !== 0) {
      updateTotalPriceOfOrder(totalPriceReducer)
    }
    else if (totalPriceReducer === null) {
      updateTotalPriceOfOrder(0);
    }
    else if (totalPriceReducer === 0) {
      updateTotalPriceOfOrder(totalPriceReducer);
    }
  }, [totalPriceReducer])


  const toggleCheck = (e) => {
    if (!displayCart) {
      updateDisplayCart(true);
      dispatch(headerDisplay(true))
    }
    else {
      updateDisplayCart(false);
      dispatch(headerDisplay(false))

    }
  }

  const loadCartAmount = () => {
    return orderAmount;
  }

  return (
    <>
      <div className={`cart-container ${displayCart ? 'adapt' : 'non-adapt'}`}>
        <button className="btn cart" onClick={toggleCheck}>
          <div className="cart-icon"></div>
        </button>
        <div className="badge">
          <span className="number">
            {loadCartAmount()}
          </span>
        </div>
      </div>
      {displayCart && <LayoutOfCart displayCart={displayCart} totalPriceOfOrder={totalPriceOfOrder} />}
    </>
  );
}

export default Cart;