import Link from 'next/link';
import React from 'react';

const Homee = () => {
  const bgg = {
    background:
      'linear-gradient(rgba(44, 218, 209, 0.2), rgba(5, 109, 86, 0.7)),url(images/home-img.jpeg)',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <>
      <section className="home" id="home" style={bgg}>
        <div className="content">
          <h3>fresh coffee in the morning</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </p>

          <Link href="#contact">
            <a className="btn">Get In Touch</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Homee;
