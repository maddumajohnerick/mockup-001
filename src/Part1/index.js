import React from 'react';
import './Part1.scss';

const Part1 = () => {
  return (
    <div className="Part1-wrapper">
      <div className="image-1">
        <img src="/images/Image-01.jpg" alt="1" />
      </div>
      <div className="image-2">
        <img src="/images/Image-02.jpg" alt="2" />
      </div>
      <div className="image-3">
        <img src="/images/Image-03.jpg" alt="3" />
      </div>
      <div className="heading">
        <h1>Answer your body's needs</h1>
        <p>
          The way ingredients are sourced affects the way we nourish our bodies.
          Author Mark Schatzer believes our body naturally develops an appetite
          for the foodsand nutrients it needs to be healthy, but that artificial
          flavourings are getting in the way. This can be reversed by focusing
          on high-quality ingredients and being mindful as your appetite guides
          you to consume according to your body's needs
        </p>

        <h2>Be mindful</h2>
        <p>
          Sourcing local or organic food is a good way to start being more
          mindful about what you're cooking and eating.
        </p>
      </div>
    </div>
  );
};

export default Part1;
