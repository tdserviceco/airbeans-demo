import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import ImageLeft from '../assets/graphics/homeLeft.svg';
import ImageRight from '../assets/graphics/homeRight.svg';
import AirbeanLanding from '../assets/graphics/airbeanLanding.svg';
import { useDispatch } from 'react-redux';
import { cartAmount } from '../actions';


function Home(props) {
  let oldOrder = JSON.parse(localStorage.getItem('order'));
  const dispatch = useDispatch();
  const loadLastedCart = () => {
    dispatch(cartAmount(oldOrder.length))
  }
  const
    [loading, updateLoading] = useState(localStorage.getItem('loading')),
    // Sätter upp menu
    [menu, updateMenu] = useState([]),
    // Check om api-servern är på eller inte
    [apiDown, updateApiDown] = useState(false)

  const fetchMenu = async () => {
    return await axios.get('http://localhost:5000/api/beans');
  }

  useEffect(() => {

    // Via async kan vi nu hämta vår menu.json fil och spara ner den i vår useState
    fetchMenu().then(res => {
      updateMenu(res.data.menu);
    }).catch(err => {
      updateApiDown(true)
    }, []);

    const timer = setTimeout(() => {
      updateLoading(false);
      // Kolla sidan om vår localstorage har data kvar från senaste avstängning... har vi, då laddar vi om den
      if (oldOrder === null) {
        return;
      }
      if (oldOrder !== 0 || oldOrder !== null) {
        loadLastedCart()
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <section className='home-section' >
      {!loading && <Menu apiStatus={apiDown} list={menu} />}
      {loading &&
        <div className='home-container '>
          <img src={ImageLeft} className='home-left' alt='home-left' />
          <img src={AirbeanLanding} className='home-center' alt='home-center' />
          <img src={ImageRight} className='home-right' alt='home-right' />
        </div>
      }
    </section >
  );
}

export default Home;