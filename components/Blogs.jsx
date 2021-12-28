import React from 'react';

const Blogs = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="images/blog-1.jpeg" alt="" />
            </div>
            <div className="content">
              <a href="#" className="title">
                tasty and refreshing coffee
              </a>
              <span>by admin / 21st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                dicta.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/blog-2.jpeg" alt="" />
            </div>
            <div className="content">
              <a href="#" className="title">
                tasty and refreshing coffee
              </a>
              <span>by admin / 21st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                dicta.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="images/blog-3.jpeg" alt="" />
            </div>
            <div className="content">
              <a href="#" className="title">
                tasty and refreshing coffee
              </a>
              <span>by admin / 21st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                dicta.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
