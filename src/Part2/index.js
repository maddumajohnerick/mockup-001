import React, { useState } from 'react';
import './Part2.scss';
import Modal from '../Modal';
import { Fade } from 'react-reveal';

const list = [
  {
    header: 'Summer Lunch Menu By Mark Best',
    details:
      "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    image: `${process.env.REACT_APP_HOMEPAGE_URL}/images/Image-04.jpg`,
  },
  {
    header: 'A Traditional Christmas Eve, Mark Best Style',
    details:
      'One of Australias best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.',
    image: `${process.env.REACT_APP_HOMEPAGE_URL}/images/Image-05.jpg`,
  },
  {
    header: 'Taking Taste Further',
    details:
      "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
    image: `${process.env.REACT_APP_HOMEPAGE_URL}/images/Image-06.jpg`,
  },
];

const Part2 = () => {
  const [imageSelected, setImageSelected] = useState('');

  const handleImgClick = (img) => {
    setImageSelected(img);
  };

  const handleClick = (obj) => {
    console.log(`Clicked item ${obj.header}`);
  };

  const handleClose = () => {
    setImageSelected('');
  };

  return (
    <div className="Part2-wrapper">
      <Fade duration={2000}>
        <h1 className="header">All the latest from AEG</h1>
      </Fade>
      {list.map((item, index) => (
        <Fade key={index} delay={800 * index + 800} duration={2000}>
          <div className={`item-${index + 1}`}>
            <img
              src={item.image}
              alt={`item-${index + 1}`}
              onClick={() => {
                handleImgClick(item.image);
              }}
            />
            <h2>{item.header}</h2>
            <p>{item.details}</p>
            <a href="#temp" onClick={() => handleClick(item)}>
              Read more
            </a>
          </div>
        </Fade>
      ))}

      {/* MODAL */}
      <Modal imageSelected={imageSelected} handleClose={handleClose} />
    </div>
  );
};

export default Part2;
