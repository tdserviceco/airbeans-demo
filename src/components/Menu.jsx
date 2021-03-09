import React, { useEffect, useState } from 'react';
import ImageTop from '../assets/graphics/graphics-header.svg';
import ImageBottom from '../assets/graphics/graphics-footer.svg';
import Header from '../components/Header.jsx';
import loadingAnimation from '../assets/graphics/loader.png';
import { useDispatch } from 'react-redux';
import { cartAmount } from '../actions';

function Menu(props) {
  const dispatch = useDispatch();
  const [loading, updateLoading] = useState(localStorage.getItem('loading'));

  const addOrder = (e) => {
    let price = e.target.dataset.price;
    let title = e.target.dataset.title;
    let id = e.target.dataset.id;
    let eta = e.target.dataset.eta;
    let order = [{ id: id, title: title, price: price, eta: eta }]
    let oldOrder = JSON.parse(localStorage.getItem('order'));
    if (oldOrder === null) {
      let saveOrder = JSON.stringify(order);
      localStorage.setItem('order', saveOrder);
      dispatch(cartAmount(order.length))
    }
    else {
      order = [...oldOrder, { id: id, title: title, price: price, eta: eta }]
      localStorage.setItem('order', JSON.stringify(order));
      dispatch(cartAmount(order.length))
    }
  }
  useEffect(() => {
    updateLoading(true);
  }, [])

  return (
    <div className={`menu-for-different-coffee ${loading ? 'loading-done' : 'loading'}`}>
      <Header />
      <img className="image image-bottom" src={ImageTop} alt="Leaf on top of the screen" />
      <h1 className="menu-title">meny</h1>
      {props.apiStatus &&
        <>
          <h2 className="server-status-title">Servern är nere... kolla upp felet!</h2>
          <img src={loadingAnimation} className="animation" alt="Laddnings tid med kaffe" />
        </>
      }
      {!props.apiStatus &&
        <ul className="coffee-types">
          {
            props.list.map((index, key) => <li className="coffee-type" key={index.id}>
              <div className="button-container">
                <button data-title={index.title} data-price={index.price} data-eta={index.eta} data-id={index.id} onClick={addOrder} type="button" className="btn add">
                  <div className="add-icon"></div>
                </button>
              </div>
              <div className="container">
                <div className="title-and-price">
                  <h2 className="title">{index.title}</h2>
                  <h2 className="price">{index.price} kr</h2>
                </div>
                <div className="sub-title">
                  <h3 className="description">
                    {index.desc}
                  </h3>
                </div>
              </div>
            </li>)
          }
        </ul >
      }
      <img className="image image-bottom" src={ImageBottom} alt="Leaf on bottom of the screen" />
    </div >
  );
}

export default Menu;