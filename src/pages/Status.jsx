import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingIcon from '../img/graphics/loader.png';
import Drone from '../img/graphics/drone.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { headerDisplay } from '../actions';


function Status(props) {
  const dispatch = useDispatch();
  const
    [orderNr, updateOrderNr] = useState(''),
    [loading, updateLoading] = useState(true);

  let [eta, updateEta] = useState(0);

  const orderConfirmationSetup = async () => {
    return await axios.post('https://airbeans-server.herokuapp.com/api/beans');
  }



  useEffect(() => {
    orderConfirmationSetup().then(res => {
      dispatch(headerDisplay(false));
      updateEta(localStorage.getItem('totalETA'));
      updateOrderNr(res.data.orderNr);
      updateLoading(false);
      localStorage.removeItem('totalPrice');
      localStorage.removeItem('order');
      localStorage.removeItem('totalETA');
    }).catch(err => console.error(err))
  }, [])

  useEffect(() => {
    if (loading) {
      document.title = 'Hämtar order!'
      return;
    }
    else {
      document.title = `Order kan hämtas om ${eta} minuter`;
      const timer =
        eta > 0 && setInterval(() => updateEta(eta - 1), 60000);
      return () => clearInterval(timer);

    }
  }, [eta, !loading])

  return (
    <section className="status-section">
      <div className={`status-container ${loading ? 'loading-screen' : ''}`}>
        {loading && <div className="loading-container">
          <img className="loading" src={LoadingIcon} alt="a coffee that are fresh from pot" />
        </div>}
        {!loading &&
          <>
            <div className="order-number-box">
              <h3 className="order-number">ordernummer <span className="bold">#{orderNr}</span></h3>
            </div>
            <div className="drone-box">
              <img src={Drone} className="drone" alt="A drone that holding coffee" />
            </div>
            <div className="delivery-text">
              <h1>Din beställning är på väg!</h1>
            </div>
            <div className="eta-container">
              <h2 className="eta"><span className="bold">{eta === 0 ? 'Order svävar utanför din dörr nu' : eta}</span> {eta === 0 ? '' : 'minuter'} </h2>
            </div>
            <div className="button-container">
              <Link to="/" className="btn done">Okay Cool!</Link>
            </div>
          </>
        }
      </div>
    </section >
  );
}

export default Status;