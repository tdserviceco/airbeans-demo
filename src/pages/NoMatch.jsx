import React from 'react';
import homeLeft from '../img/graphics/homeLeft.svg';
import homeRight from '../img/graphics/homeRight.svg';

function NoMatch(props) {
  return (
    <section className="error-section">
      <div className='error-container'>
        <img src={homeLeft} className='home-left' alt='Leafs that lean on the left side of the container' />
        <h2 className="error-text">Page your looking for doesnt exist here</h2>
        <img src={homeRight} className='home-right' alt='Leafs that lean on the right side of the container' />
      </div>
    </section>
  );
}

export default NoMatch;