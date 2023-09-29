import React, { useState } from 'react';
import Modal from '../Modal';
import { Fade } from 'react-reveal';
import './Part1.scss';

const images = [
  `${process.env.REACT_APP_HOMEPAGE_URL}/images/Image-01.jpg`,
  `${process.env.REACT_APP_HOMEPAGE_URL}/images/Image-02.jpg`,
  `${process.env.REACT_APP_HOMEPAGE_URL}/images/Image-03.jpg`,
];

const Part1 = () => {
  const [imageSelected, setImageSelected] = useState('');

  const handleImgClick = (img) => {
    setImageSelected(img);
  };

  const handleClose = () => {
    setImageSelected('');
  };

  return (
    <div className="Part1-wrapper">
      {images.map((image, index) => (
        <Fade key={index} delay={800 * index} duration={2000}>
          <div className={`stock-${index + 1}`}>
            <img
              src={image}
              alt={`stock-${index + 1}`}
              onClick={() => {
                handleImgClick(image);
              }}
            />
          </div>
        </Fade>
      ))}
      <Fade delay={2400} duration={2000}>
        <div className="heading">
          <h1>Answer your body's needs</h1>
          <p>
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally develops an
            appetite for the foodsand nutrients it needs to be healthy, but that
            artificial flavourings are getting in the way. This can be reversed
            by focusing on high-quality ingredients and being mindful as your
            appetite guides you to consume according to your body's needs
          </p>

          <h2>Be mindful</h2>
          <p>
            Sourcing local or organic food is a good way to start being more
            mindful about what you're cooking and eating.
          </p>
        </div>
      </Fade>

      {/* MODAL */}
      <Modal imageSelected={imageSelected} handleClose={handleClose} />
    </div>
  );
};

export default Part1;
