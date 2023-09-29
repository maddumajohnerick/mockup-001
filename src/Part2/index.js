import React from 'react';
import './Part2.scss';

const list = [
  { header: 'Test', details: 'Test', image: '/images/Image-04.jpg' },
  { header: 'Test', details: 'Test', image: '/images/Image-05.jpg' },
  { header: 'Test', details: 'Test', image: '/images/Image-06.jpg' },
];

const Part2 = () => {
  const handleClick = (obj) => {
    console.log(`Clicked item ${obj.header}`);
  };

  return (
    <div className="Part2-wrapper">
      {list.map((item, index) => (
        <div key={index} className={`item-${index + 1}`}>
          <img src={item.image} alt={`item-${index + 1}`} />
          <h2>{item.header}</h2>
          <p>{item.details}</p>
          <a href="#temp" onClick={() => handleClick(item)}>
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default Part2;
