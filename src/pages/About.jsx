import React from 'react';
import Header from '../components/Header.jsx';
import ImageTop from '../assets/graphics/graphics-header.svg';
import ImageBottom from '../assets/graphics/graphics-footer.svg';
import EvaCortado from '../assets/graphics/eva-cortado.jpg';


function About(props) {

  return (
    <section className='about-section'>
      <div className='about-container'>
        <Header />
        <img className="image image-top" src={ImageTop} alt="Leaf on top of the screen" />
        <div className='about-content-container'>
          <h1 className='about-title'>Vårt kaffe</h1>
          <p className='about-description bold'>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p>
          <p className='about-description'>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
          <p className='about-description'>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>


          <div className='about-ceo'>
            <img src={EvaCortado} className='profile-image' alt='Eva-Cortado.jpg' />
            <h2 className='about-ceo-name'>Eva Cortado</h2>
            <h4 className='about-ceo-position'>VD & Grundare</h4>
          </div>
        </div>

        <img className="image image-bottom" src={ImageBottom} alt="Leaf on top of the screen" />
      </div>
    </section>
  );
}

export default About;
