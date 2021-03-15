import React from 'react';
import FilterItems from './FilterItems';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

function LayoutOfCart(props) {
  const disableButton = useSelector(state => state.cartAmount);
  const history = useHistory();
  return (
    <div className={`confirmation-box ${props.displayCart ? 'adapt' : 'non-adapt'}`}>
      <div className="confirmation-container">
        <h2 className="order-title">
          Din beställning
            </h2>
        <div className="order-container">
          <ul className="order-list"><FilterItems /></ul>
          <div className="total-sum-of-price-container">
            <h2 className="total-sum-text">total</h2>
            <span className="total-sum-underline"></span>
            <h3 className="total-sum-of-price">{props.totalPriceOfOrder === null ? 0 : props.totalPriceOfOrder} kr</h3>
          </div>
          <div className="sale-tax-container">
            <p className="sale-tax">inkl moms + drönarleverans</p>
          </div>
        </div>
        <button type="button" onClick={(e) => history.push('/status')} disabled={disableButton === 0 ? true : false} className="btn accept-order"><h2 className="button-text">Take my money!</h2></button>
      </div>
    </div>
  );
}

export default LayoutOfCart;